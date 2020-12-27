const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripeSecretKey =
  "sk_test_51I2h9NHAbpDjOVoNO9vt7ktbdegOkiY4Q7y38xGBc7B7pFqEfH2eTXolr5e10xURPRkih5z56gIp1rxcwFUbL6Y2002EpHJSrP";
const stripe = require("stripe")(stripeSecretKey);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello backend");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment request for total >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    description: "amazon clone payment",
  });

  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

exports.api = functions.https.onRequest(app);
