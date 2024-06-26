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
  HStack,
  Stack,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavbarHeight } from "./Context/NavbarHeightContext";
const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const { navbarHeight } = useNavbarHeight();

  const keyFactors: string[] = t("about_us.key_factors.items", {
    returnObjects: true,
  }) as unknown as string[];

  return (
    <Container
      maxW="1200px"
      w="100%"
      p="0"
      pt={`${navbarHeight}px`}
      color={useColorModeValue("#485727", "#c5d6a1")}
    >
      <VStack spacing={8} align="start">
        <Box
          bgImg={"image/lav.jpg"}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
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
          </Box>
        </Box>

        <Card
          direction={{ base: "column-reverse", sm: "row" }}
          
          mb="3vw"
          bg={useColorModeValue("gray.100", "gray.700")}
          borderRadius="lg"
          boxShadow="lg"
          
        >
          <Stack w="100%">
            <CardBody p="5vw"  color={useColorModeValue("#485727", "#c5d6a1")}>
              <Heading as="h3" size="lg" mb={4}>
                {t("about_us.introduction.title")}
              </Heading>
              <Text fontSize="lg">
                {t("about_us.introduction.description")}
              </Text>
            </CardBody>
          </Stack>
          <Box
            w="100%"
            minH="320px"
            bgImage="url('image/ab1.jpg')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="lg"
          ></Box>
        </Card>
        <Card
          direction={{ base: "column", sm: "row" }}
          
          mb="3vw"
          bg={useColorModeValue("gray.100", "gray.700")}
          borderRadius="lg"
          boxShadow="lg"
        >
          <Box
            w="100%"
            minH="320px"
            bgImage="url('image/ab2.jpg')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="lg"
          ></Box>

          <Stack>
            <CardBody p="5vw"  color={useColorModeValue("#485727", "#c5d6a1")}>
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
            </CardBody>
          </Stack>
        </Card>
      </VStack>
    </Container>
  );
};

export default AboutUs;
