import Stripe from 'stripe';
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Désactivez la vérification CSRF pour cette API route
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET(req) {
  return NextResponse.json({msg:"coucou"});
}

export async function POST(req) {
  try {
    const body = await req.text();

    const signature = req.headers.get('stripe-signature');

    const event = stripe.webhooks.constructEvent(body, signature, process.env.PAYMENT_WEBHOOK);

    if (event.type === "checkout.session.completed") {
      if (!event.data.object.customer_details.email) {
        throw new Error(`missing user email, ${event.id}`);
      }

      console.log(event.data.object.customer_details.email)
      //   updateDatabase(event.data.object.metadata.itinerary_id);
      //   sendEmail(event.data.object.customer_details.email);
    }

    return NextResponse.json({ result: event, ok: true, mail: event.data.object.customer_details.email });
  } catch (error) {

    console.error(error);
    return NextResponse.json(
      {
        message: "something went wrong",
        ok: false,
      },
      { status: 500 }
    );
  }


}