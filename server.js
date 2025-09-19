import express from "express";
import cors from "cors";
import Stripe from "stripe";


const app = express();

// stripe secret key
const stripe = Stripe(
  "sk_test_51S8oxaLp5TRh9qVUaZh6cifq6J5vc8RWDIkf8TYcw6TgEQrjMs3ijewaMAWJeuge8g2mU82JolsD8wTXTOcCY8bx00g0Gf8F7V"
);

app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  try {
    console.log("Received items:", req.body.items);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title || "Untitled Product", // Fallback
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error("Stripe error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

const PORT=5000;

app.listen(PORT, ()=>{

    console.log(`Server running at http://localhost:${PORT}`)

})




