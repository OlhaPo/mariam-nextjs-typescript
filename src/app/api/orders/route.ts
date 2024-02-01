import { Order, OrderModel, PopulatedOrder } from "@/models/OrderSchema";
import { mongooseConnect } from "../../../../lib/mongogoose";
import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";
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
      await OrderModel.findById<Order>(orderDoc._id).populate({
        path: "items.product_id",
        model: Product,
      });

    if (detailedOrder) {
      await sendWithResend(detailedOrder, lang);
      // sendWithNodemailer(email, first_name);
    }
  }

  return response;
}

export async function GET() {
  await mongooseConnect();
  const result = await OrderModel.find<Order>().populate({
    path: "items.product_id",
    model: Product,
  });
  return NextResponse.json(result);
}

async function sendWithResend(orderData: PopulatedOrder, lang: Locale) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  if (!orderData.email) return;
  const { data, error } = await resend.emails.send({
    from: `mariam crochet jewelry<${process.env.SENDER_EMAIL}>`,
    to: [orderData.email],
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

// async function sendWithNodemailer(to: string, first_name: string) {
//   const transporter: Transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: 587,
//     secure: false, // upgrade later with STARTTLS
//     auth: {
//       user: process.env.SENDER_EMAIL,
//       pass: process.env.SENDER_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: process.env.SENDER_EMAIL,
//     to,
//     subject: "Order Confirmation for mariam crochet jewelry",
//     html: `<p>Dear ${first_name}. Thank you for your order.</p>`,
//   };

//   try {
//     // Send email
//     const sendEmailInfo = await transporter.sendMail(mailOptions);
//     console.log("Email sent: " + sendEmailInfo.response);
//   } catch (e) {
//     console.log("Error sending confirmation email.", e);
//   }
// }
