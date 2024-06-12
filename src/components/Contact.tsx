import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Heading,
  Text,
  Stack,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contacts: React.FC = () => {
  const { t } = useTranslation();

  const contacts = t("contacts", { returnObjects: true }) as Contacts;

  return (
    <Box pt="140px">
      <Box
        bgImg={"image/gr.jpg"}
        objectFit="cover"
        bgPosition="center"
        pt="40px "
        pb="40px"
      >
        <Box
          w="100%"
          p={"5vw"}
          boxShadow="sm"
          bg={useColorModeValue("whiteAlpha.800", "blackAlpha.800")}
        >
          <Heading as="h3" size="lg" mb={4} textAlign="center">
            {contacts.title}
          </Heading>
          <Stack spacing={4} alignContent="center" w="100" m="auto">
            <Box display="flex" alignItems="center" justifyContent={"center"}>
              <Icon as={FaMapMarkerAlt} w={6} h={6} mr={2} />
              <Text>{contacts.address}</Text>
            </Box>
            <Box display="flex" alignItems="center" justifyContent={"center"}>
              <Icon as={FaEnvelope} w={6} h={6} mr={2} />
              <Link href={`mailto:${contacts.email}`} color="blue.500">
                {contacts.email}
              </Link>
            </Box>
            <Box display="flex" alignItems="center" justifyContent={"center"}>
              <Icon as={FaPhoneAlt} w={6} h={6} mr={2} />
              <Stack spacing={2}>
                {contacts.phones.map((phone: string, index: number) => (
                  <Text key={index}>{phone}</Text>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Contacts;

interface Contacts {
  title: string;
  address: string;
  email: string;
  phones: string[];
}
