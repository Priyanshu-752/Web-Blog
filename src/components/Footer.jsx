import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import btc from "../assets/au.jpg"
import { AiFillLinkedin, AiFillGithub,AiFillInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
          
          <Text fontWeight={"bold"}>Follow Us 
            
          <Text
            fontSize={"3xl"} display={"flex"} flexDirection={"row"}
            
            
          >
                <a href='https://www.linkedin.com/in/priyanshu-negi-87a56124a/' target={"blank"}><AiFillLinkedin /></a> 
                  
                <a href='https://github.com/Priyanshu-752' target={"blank"}> <AiFillGithub /> </a>
                    
               
               <a href='https://instagram.com/_priyansh_u123?igshid=ZDdkNTZiNTM=' target={"blank"}> <AiFillInstagram /> </a>
                    </Text>
               

            
            </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={btc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;