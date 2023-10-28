import {VStack , Image, Text, Button} from "@chakra-ui/react"

function Card({amount,img,checkoutHendler}) {
  return (
    <VStack>
        <Image src={img}/>
        <Text>₹{amount}</Text>
        <Button onClick={()=>checkoutHendler(amount)}>Buy Now</Button>
    </VStack>
  )
}

export default Card