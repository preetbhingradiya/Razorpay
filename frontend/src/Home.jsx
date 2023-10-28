import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import axios from "axios";
import Card from "./Card";

const Home = () => {
  const checkoutHendler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:8090/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:8090/api/checkout", {
      amount,
    });
    var options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "preet bhingradiya",
      description: "Razorpay payment",
      image: "https://avatars.githubusercontent.com/u/132185642?s=400&u=75323497adce9b3c4497db25a3eb31fcbd6515e0&v=4",
      order_id: order.id,
      callback_url: "http://localhost:8090/api/payment",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzor = new window.Razorpay(options);
    rzor.open();
  };

  return (
    <Box>
      <Stack
        direction={["column", "row"]}
        h={"100vh"}
        align="center"
        justifyContent="center"
      >
        <Card
          amount={5000}
          img={
            "https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png"
          }
          checkoutHendler={checkoutHendler}
        />
        <Card
          amount={3000}
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeCyyfffvOlf-oSzJc1Z03a7IuvmUe4xMXw&usqp=CAU"
          }
          checkoutHendler={checkoutHendler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
