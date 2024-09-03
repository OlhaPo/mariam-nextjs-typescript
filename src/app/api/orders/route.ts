import { Order, OrderModel, PopulatedOrder } from "@/models/OrderSchema";
import { mongooseConnect } from "../../../../lib/mongogoose";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ConfirmationEmail } from "@/components/confirmation-email";
import { Product } from "@/models/ProductSchema";
import { Locale } from "../../../../i18n.config";

const DEFAULT_LANG = "en";

export async function POST(req: NextRequest) {
  await mongooseConnect();
  const lang = (req.nextUrl.searchParams.get("lang") ?? DEFAULT_LANG) as Locale;
  const data = await req.json();
  const {
    items,
    first_name,
    last_name,
    email,
    phone_number,
    messenger,
    comment,
  } = data;
  let response;
  let orderDoc!: Order;

  try {
    orderDoc = await OrderModel.create({
      items,
      first_name,
      last_name,
      email,
      phone_number,
      messenger,
      comment,
    });
    response = NextResponse.json(orderDoc);
  } catch (error) {
    console.error("Error creating order:", error);
    response = NextResponse.error();
  }

  if (orderDoc) {
    const detailedOrder: PopulatedOrder | null =
      await OrderModel.findById<Order>(orderDoc._id).populate<PopulatedOrder>({
        path: "items.product",
        model: Product,
      });

    if (detailedOrder) {
      await sendWithResend(detailedOrder, lang);
      // sendWithNodemailer(email, first_name);
    }
  }

  return response;
}

// export async function GET() {
//   await mongooseConnect();
//   const result = await OrderModel.find<Order>().populate({
//     path: "items.product",
//     model: Product,
//     // localField: "product",
//   });
//   return NextResponse.json(result);
// }

export async function GET(req: NextRequest) {
  await mongooseConnect();

  const id = req.nextUrl.searchParams.get("id");
  let result;

  if (id) {
    result = await OrderModel.findById(id).populate({
      path: "items.product",
      model: Product,
    });
  } else {
    result = await OrderModel.find().populate({
      path: "items.product",
      model: Product,
    });
  }
  return NextResponse.json(result);
}

async function sendWithResend(orderData: PopulatedOrder, lang: Locale) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  if (!orderData.email) return;
  const { data, error } = await resend.emails.send({
    from: `mariam crochet jewelry<${process.env.SENDER_EMAIL}>`,
    to: [orderData.email, "mariam.crochet.jewelry@gmail.com"],
    subject: "order confirmation",
    react: ConfirmationEmail({ order: orderData, lang }) as React.ReactElement,
  });

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }
}
