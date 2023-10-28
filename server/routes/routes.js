import express from "express"
import { checkOut } from "../controllers/paymentControler.js"

export const route = express()
 
route.post("/checkout",checkOut)