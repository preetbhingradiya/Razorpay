import express from "express"
import { checkOut, paymentVerify } from "../controllers/paymentControler.js"

export const route = express()

route.get('/getkey',(req,res)=>res.status(200).json({key: process.env.RAZORPAY_API_KEY}))
 
route.post("/checkout",checkOut)
route.post('/payment',paymentVerify)