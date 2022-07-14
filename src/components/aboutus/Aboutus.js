import { Stack, Text, VStack } from "@chakra-ui/react";
import Donate from "../../components/donate/Donate";

const Aboutus = () => {
  return (
    <Stack spacing={4} w={"100%"} h={"100%"}>
      <VStack>
        <Text fontSize="xl">
          StreetVet provides completely free veterinary treatment to the pets
          belonging to the homeless. In order to deliver this service we simply
          could not and would not exist without the generosity of the veterinary
          industry and you, our amazing supporters. With more ways then ever to
          donate to charities, we want to make sure that you have all the
          information you need to make a donation in whichever way suits you
          best. You can give a one-off donation, or set up a regular gifts by
          selecting the regular giving option.
        </Text>

        {/* donate button goes here */}
        <Text  w={'25%'} pb={30}>
          <Donate />
        </Text>

        {/* donate button ends here */}
      </VStack>
    </Stack>
  );
};

export default Aboutus;
