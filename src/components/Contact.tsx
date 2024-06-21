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
import { ContactsProps } from "./Interfaces/ContactsProps";

const Contacts: React.FC = () => {
  const { t } = useTranslation();

  const contacts = t("contacts", { returnObjects: true }) as ContactsProps;

  return (
    <Box pt="140px" h="70vh" color={useColorModeValue("#485727", "#c5d6a1")}>
      <Box
        bgImg={"image/ky.jpg"}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
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
              <Text as="b">{contacts.address}</Text>
            </Box>
            <Box display="flex" alignItems="center" justifyContent={"center"}>
              <Icon as={FaEnvelope} w={6} h={6} mr={2} />
              <Link as="b" href={`mailto:${contacts.email}`} color="blue.500">
                {contacts.email}
              </Link>
            </Box>
            <Box display="flex" alignItems="center" justifyContent={"center"}>
              <Icon as={FaPhoneAlt} w={6} h={6} mr={2} />
              <Stack spacing={2}>
                {contacts.phones.map((phone: string, index: number) => (
                  <Text as="b" key={index}>
                    {phone}
                  </Text>
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
