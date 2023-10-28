import { instance } from "../server.js";

export const checkOut = async(req, res) => {
  let options = {
    amount: 50000, // amount in the smallest currency unit
    currency: "INR",
  };
  const order=await instance.orders.create(options);
  res.send(order)
};
