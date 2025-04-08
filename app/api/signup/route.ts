import { auth, db } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const { name, email, phoneNumber, password } = await reqBody;
    if (!name || !email || !phoneNumber || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await updateProfile(user, { displayName: name });

    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      password,
      phoneNumber,
    });

    console.log(user, "User created successfully");
    return NextResponse.json({
      success: true,
      message: "User created Successfully",
      user,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error });
  }
};
