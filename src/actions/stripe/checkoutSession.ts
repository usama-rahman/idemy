import formatAmountForStripe from "@/lib/stripeAmountFormat";
import { stripe } from "./stripe";

const CURRENCY = "inr";

async function createCheckoutSession(data) {
  const ui_mode = "hosted";
  const origin = headers().get("origin");
  const courseId = data.get("courseId");

  const course = await getCourseDetails(courseId);

  if (!course) return new Error(`Course not found`);

  const courseName = course?.title;
  const coursePrice = course?.price;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    submit_type: "auto",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: CURRENCY,

          product_data: {
            name: courseName,
          },

          unit_amount: formatAmountForStripe(coursePrice, CURRENCY),
        },
      },
    ],

    ...(ui_mode === "hosted" && {
      success_url: `${origin}/enroll-success?session_id={CHECKOUT_SESSION_ID}&courseId=${courseId}`,

      cancel_url: `${origin}/courses`,
    }),

    ui_mode,
  });

  return {
    client_secret: checkoutSession.client_secret,

    url: checkoutSession.url,
  };
}

export default createCheckoutSession;
