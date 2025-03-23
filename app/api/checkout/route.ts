import { ProductData } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  try {
    // Destructure the request body directly
    const { items, email } = await request.json();

    if (!items || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const description = items.map((item: ProductData) =>
      item?.description?.flatMap((block: { children: { text: string }[] }) =>
        block.children.map((child) => child.text)
      )
    );

    // Map the cart items to the correct format for Stripe
    const extractingItems = items.map((item: ProductData) => ({
      quantity: item.quantity,

      price_data: {
        currency: "ngn",
        unit_amount: Math.round(item.price * 100),
        product_data: {
          name: item?.title,
          description: description.map((item: any) => item.text),
        },
      },
    }));

    const origin = request.headers.get("origin"); // Default fallback

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `${origin}/success/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel/canceled=true`,
      metadata: {
        email,
      },
    });

    return NextResponse.json({ url: session?.url }, { status: 200 });
  } catch (error: any) {
    console.error(
      "Error during Stripe checkout session creation:",
      error.message
    ); // Log the error message
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
