import express from "express";
import { config } from "dotenv";
import Razorpay from "razorpay";
import cors from "cors"
import { route } from "./routes/routes.js";

const app = express();
app.use(cors())
config({ path: "./config/config.env" });

 export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

app.use('/api',route)

app.listen(process.env.PORT, () => {
  console.log(`connect to port ${process.env.PORT}`);
});
