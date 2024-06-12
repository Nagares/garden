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
      pt={"100px"}
    >
      <Grid>
        <Box
          bgImg={"image/home.jpg"}
          bgImage="url('image/lawn.jpg')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          mb={5}
        >
          <Box
            w="100%"
            p={"10vw"}
            boxShadow="sm"
            bg={useColorModeValue("whiteAlpha.700", "blackAlpha.700")}
          >
            <Heading as="h1" size="3xl">
              {t("header.title")}
            </Heading>
          </Box>
        </Box>
        <Divider mt={5} mb={5} />

        <Heading as="h2">{t("services.title")}</Heading>
        <Divider mt={5} mb={5} />
        <Box mt="3" mb={5}>
          <Text fontSize="xl" w="65%" margin={"auto"} textAlign={["justify"]}>
            {t("services.pruning") + " "}
            {t("services.pest_control") + " "}
            {t("services.scarification") + " "}
            {t("services.lawn_mowing") + " "}
            {t("services.other")}
          </Text>
        </Box>
        <Divider mt={5} mb={5} />
        <BeforeAfter beforeImage={"image/2b.jpg"} afterImage={"image/2a.jpg"} />
        <Divider mt={10} mb={5} />
        <CalendarComponent />
        <Divider mt={10} mb={5} />
        <BeforeAfter beforeImage={"image/1b.jpg"} afterImage={"image/1a.jpg"} />
        <Divider mt={10} mb={5} />
        <Contact />
        <Footer />
      </Grid>
    </Box>
  );
}

export default Content;
