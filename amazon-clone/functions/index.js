const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
(
  "sk_test_51KKlZgSA1PcZ4HWhGdj478u1CpAuDGxAQO463H55on5aCkikxnxvY4qE1YLoyqTkBs6ETXdhCFAbBu9r72i1dZok00lL6XdPy6"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world!!!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//endpoint 
// http://localhost:5001/project-v1-c1a3c/us-central1/api
