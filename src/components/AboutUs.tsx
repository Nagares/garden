import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  Container,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  const keyFactors: string[] = t("about_us.key_factors.items", {
    returnObjects: true,
  }) as unknown as string[];

  return (
    <Container
      maxW="7xl"
      w="100%"
      p="0"
      pt="140px"
      color={useColorModeValue("#485727", "#c5d6a1")}
    >
      <VStack spacing={8} align="start">
        <Box
          bgImg={"image/lav.jpg"}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          pt="40px "
          pb="40px"
          w="100%"
        >
          <Box
            w="100%"
            p={"6vw"}
            boxShadow="sm"
            bg={useColorModeValue("whiteAlpha.800", "blackAlpha.800")}
            justifyContent="center"
            alignContent={"center"}
          >
            <Heading
              textAlign={"center"}
              as="h1"
              size="2xl"
              color={useColorModeValue("green.600", "green.200")}
            >
              {t("about_us.title")}
            </Heading>
            <Box textAlign={"center"} mt={"3vw"} minH={"70px"}>
              <Image
                m={"auto"}
                w="10vw"
                borderRadius="lg"
                src={"image/logo.jpg"}
                alt="Serhiy and his team"
                objectFit="cover"
                h="auto"
              />
            </Box>
          </Box>
        </Box>
        <Box
          bg={useColorModeValue("gray.100", "gray.700")}
          ml="7vw"
          mr="7vw"
          p={8}
          borderRadius="lg"
          boxShadow="lg"
        >
          <Heading as="h2" size="xl" mb={4}>
            {t("about_us.introduction.title")}
          </Heading>
          <Text fontSize="lg">{t("about_us.introduction.description")}</Text>
        </Box>
        <Box
          ml="7vw"
          mr="7vw"
          mb="3vw"
          bg={useColorModeValue("gray.50", "gray.800")}
          p={8}
          borderRadius="lg"
          boxShadow="lg"
        >
          <Heading as="h3" size="lg" mb={4}>
            {t("about_us.key_factors.title")}
          </Heading>
          <List spacing={3}>
            {keyFactors.map((item, index) => (
              <ListItem key={index} fontSize="lg">
                {item}
              </ListItem>
            ))}
          </List>
          <Text fontSize="lg" mt={4}>
            {t("about_us.key_factors.conclusion")}
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default AboutUs;
