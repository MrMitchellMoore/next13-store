import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  if (body.lineItems.length === 0) {
    return new Response("Error", {
      status: 405,
    });
  }

  try {
    const stripe = new Stripe(process.env.NEXT_PUBLIC_SECRET_KEY ?? "", {
      apiVersion: "2022-11-15",
    });
    const session = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      line_items: body.lineItems,
      currency: "usd",
      mode: "payment",
    });
    return NextResponse.json({ session });
  } catch (err) {
    console.log(`Something went wrong: ${err}`);
    return new Response("Error", {
      status: 405,
    });
  }
}
