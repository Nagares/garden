import {
  Box,
  Grid,
  Heading,
  Divider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useTranslation } from "react-i18next";
import CalendarComponent from "./CalendarComponent";
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

        <Heading as="h2"  color={useColorModeValue("green.600", "green.200")}>{t("wedo.title")}</Heading>
        <Divider mt={5} mb={5} />
        <Box mt="3" mb={5}>
          <Text fontSize="xl" w="80vw" margin={"auto"} textAlign={["justify"]}>
            {t("wedo.pruning") + " "}
            {t("wedo.pest_control") + " "}
            {t("wedo.scarification") + " "}
            {t("wedo.lawn_mowing") + " "}
            {t("wedo.other")}
          </Text>
        </Box>
        <Divider mt={5} mb={5} />
        <BeforeAfter beforeImage={"image/2b.jpg"} afterImage={"image/2a.jpg"} />
        <Divider mt={10} mb={5} />
        <CalendarComponent />
        <Divider mt={10} mb={5} />
        <BeforeAfter beforeImage={"image/1b.jpg"} afterImage={"image/1a.jpg"} />
        <Divider mt={10} mb={5} />
      </Grid>
    </Box>
  );
}

export default Content;
