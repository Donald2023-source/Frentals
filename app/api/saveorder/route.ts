import { adminDb } from "@/firebaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();

    const { cart, email, id, totalAmt } = await reqBody;

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
        await userOrderRef.set({ email });
      }
      await userOrderRef.set({ value: orderItem, merge: true });
    }

    return NextResponse.json(
      { success: true, message: "Order saved successfully" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
};
