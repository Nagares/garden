import {
  Box,
  Grid,
  Heading,
  Divider,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

import { useTranslation } from "react-i18next";
import CalendarComponent from "./CalendarComponent";
import Contact from "./Contact";
import Footer from "./Footer";
import BeforeAfter from "./BeforeAfterProps";

function Content() {
  const { t } = useTranslation();

  return (
    <Box
      id="home"
      textAlign="center"
      fontSize="xl"
      color={useColorModeValue("#485727", "#c5d6a1")}
      pt={"140px"}
    >
      <Grid>
        <Heading as="h1" size="3xl">
          {t("header.title")}
        </Heading>
        <Divider mt={5} mb={5} />
        <Box position="static">
          <Image
            borderRadius="md"
            src={"image/"}
            alt="img"
            objectFit="cover"
            h="300px"
          />
        </Box>
        <Heading as="h2">{t("services.title")}</Heading>
        <Box mt="3">
          <Text fontSize="xl" w="65%" margin={"auto"} textAlign={["justify"]}>
            {t("services.pruning") + " "}
            {t("services.pest_control") + " "}
            {t("services.scarification") + " "}
            {t("services.lawn_mowing") + " "}
            {t("services.other")}
          </Text>
        </Box>
        <BeforeAfter beforeImage={"image/2b.jpg"} afterImage={"image/2a.jpg"} />
        <Divider mt={5} mb={5} />
        <CalendarComponent />
        <BeforeAfter beforeImage={"image/1b.jpg"} afterImage={"image/1a.jpg"} />
        <Contact />
        <Footer />
      </Grid>
    </Box>
  );
}

export default Content;
