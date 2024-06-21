import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Text,
  Stack,
  Icon,
  Link,
  Divider,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FooterDataProps } from "./Interfaces/FooterDataProps";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const footerData = t("footer", { returnObjects: true }) as FooterDataProps;

  return (
    <Box
      as="footer"
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("#485727", "#c5d6a1")}
      py={10}
    >
      <Box maxW="1200px" mx="auto" px={6}>
        <Stack spacing={6}>
          <Box textAlign="center">
            <Image
              src={"image/logo.jpg"}
              m="auto"
              alt="After"
              objectFit="cover"
              boxSize="50px"
              borderRadius="md"
            />
            <Text fontSize="xl" fontWeight="bold">
              {footerData.companyName}
            </Text>
            <Divider my={5} borderColor="gray.500" />
          </Box>
          <Stack
            direction={["column", "row"]}
            spacing={8}
            justify="space-around"
          >
            <Box textAlign="center">
              <Icon as={FaMapMarkerAlt} w={6} h={6} mb={2} />
              <Text>{footerData.address}</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaEnvelope} w={6} h={6} mb={2} />
              <Text>
                <Link href={`mailto:${footerData.email}`} color="blue.300">
                  {footerData.email}
                </Link>
              </Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaPhoneAlt} w={6} h={6} mb={2} />
              <Stack spacing={1}>
                {footerData.phones.map((phone, index) => (
                  <Text key={index}>{phone}</Text>
                ))}
              </Stack>
            </Box>
          </Stack>
          <Box textAlign="center">
            <Text fontSize="sm" color="gray.500">
              {footerData.copyright}
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
