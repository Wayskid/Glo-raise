import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/mongoose.js";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import foundersRoute from "./routes/foundersRoute.js";
import fundersRoute from "./routes/fundersRoute.js";
import { stripeRouter } from "./config/stripe.js";
import stayInformedRoute from "./routes/stayInformedRoute.js";

dotenv.config();
connectDB();
const app = express();
app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      req.rawBody = buf;
    },
    limit: "50mb",
    extended: true,
  })
);

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    optionSuccessStatus: 204,
    preflightContinue: false,
  })
);
const server = http.createServer(app);

//Api Routes
app.use("/api/funders", fundersRoute);
app.use("/api/founders", foundersRoute);
app.use("/api/stripe", stripeRouter);
app.use("/api/subscribe", stayInformedRoute);

const PORT = process.env.PORT;
server.listen(PORT || 5000, console.log(`Server is running on ${PORT}`));
