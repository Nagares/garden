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
      py={12}
      pt="140px"
      color={useColorModeValue("#485727", "#c5d6a1")}
    >
      <VStack spacing={8} align="start">
        <Heading
          as="h1"
          size="2xl"
          color={useColorModeValue("green.600", "green.200")}
        >
          {t("about_us.title")}
        </Heading>
        <Box>
          <Image
            borderRadius="lg"
            src="./image/logo.jpg"
            alt="Serhiy and his team"
            objectFit="cover"
            w="50%"
            h="auto"
          />
        </Box>
        <Box
          bg={useColorModeValue("gray.100", "gray.700")}
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
