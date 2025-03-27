import { adminDb } from "@/firebaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { cart, email, id, totalAmt } = reqBody; // No need for await here, reqBody is already resolved

    const orderItem = {
      amount: totalAmt,
      items: cart || [],
    };

    if (cart.length) {
      const userOrderRef = adminDb
        .collection("order")
        .doc(email)
        .collection("orders")
        .doc(id);

      const userDoc = await userOrderRef.get();
      if (!userDoc.exists) {
        await userOrderRef.set({ email }); // Initialize with email
      }
      await userOrderRef.set(orderItem, { merge: true }); // Correct syntax for merge option
    }

    return NextResponse.json(
      { success: true, message: "Order saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST /api/saveorder:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
};
