import express, { urlencoded } from "express";
import { config } from "dotenv";
import Razorpay from "razorpay";
import cors from "cors"
import { route } from "./routes/routes.js";
import { connect } from "./config/database.js";

const app = express();
app.use(cors())
config({ path: "./config/config.env" });

 export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',route)

app.listen(process.env.PORT, () => {
  console.log(`connect to port ${process.env.PORT}`);
  connect()
});
