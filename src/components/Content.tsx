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
import { useNavbarHeight } from "./Context/NavbarHeightContext";

function Content() {
  const { t } = useTranslation();
  const { navbarHeight } = useNavbarHeight();
  return (
    <Box pt={`${navbarHeight}px`}>
      <Box
        w="100%"
        id="home"
        textAlign="center"
        fontSize="xl"
        color={useColorModeValue("#485727", "#c5d6a1")}
      >
        <Grid maxW="1200px" m="auto">
          <Box
         
            bgImage="url('image/lawn.jpg')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            mb={5}
          >
            <Box
              p="5vh"
              boxShadow="sm"
              bg={useColorModeValue("whiteAlpha.700", "blackAlpha.700")}
            >
              <Heading as="h1" size="4xl">
                {t("header.title")}
              </Heading>
            </Box>
          </Box>
          <Box
            w="100%"
            h="50vw"
            minH="320px"
            bgImg={"image/home.jpg"}
            bgImage="url('image/ph1.jpg')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
          ></Box>
          <Divider mt={5} mb={5} />

          <Heading as="h2" color={useColorModeValue("green.600", "green.200")}>
            {t("wedo.title")}
          </Heading>
          <Divider mt={5} mb={5} />
          <Box mt="3" mb={5}>
            <Text
            p='0 5vw'
              fontSize="xl"
              w="100%"
              margin={"auto"}
              textAlign={["justify"]}
            >
              {t("wedo.pruning") + " "}
              {t("wedo.pest_control") + " "}
              {t("wedo.scarification") + " "}
              {t("wedo.lawn_mowing") + " "}
              {t("wedo.other")}
            </Text>
          </Box>
          <Divider mt={5} mb={5} />
          <Box
            w="100%"
            h="50vw"
            minH="320px"
            bgImage="url('image/arg.jpg')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
          ></Box>
          <Divider mt={5} mb={5} />
          <CalendarComponent />
          <Divider mt={10} mb={5} />
          <Box w="100%">
            <Heading
              as="h3"
              size="3xl"
              color={useColorModeValue("green.600", "green.200")}
            >
              {t("wedo.our_works")}
            </Heading>
          </Box>
          <Divider mt={5} mb={5} />

          <BeforeAfter
            beforeImage={"image/2b.jpg"}
            afterImage={"image/2a.jpg"}
          />
          <Divider mt={5} mb={5} />
          <BeforeAfter
            beforeImage={"image/1b.jpg"}
            afterImage={"image/1a.jpg"}
          />
          <Divider mt={5} mb={5} />
          <Box
            w="100%"
            h="50vw"
            minH="320px"
            bgImage="url('image/colo.jpg')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
          ></Box>
          <Divider mt={5} mb={5} />
        </Grid>
      </Box>
    </Box>
  );
}

export default Content;
