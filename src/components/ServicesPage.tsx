import React from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavbarHeight } from "./Context/NavbarHeightContext";
const ServiceItem = ({ title, items }: { title: string; items: string[] }) => (
  <VStack align="start" spacing={3} py={4} m={"0 5vw"}>
    <Heading
      as="h4"
      size="md"
      alignSelf={"start"}
      textAlign={"start"}
      borderBottom="2px solid"
      pb={2}
      mb={2}
    >
      {title}
    </Heading>
    {items.map((item, index) => (
      <Text
        textAlign={"start"}
        key={index}
        pl={4}
        _before={{ content: '"• "', color: "green.500" }}
      >
        {item}
      </Text>
    ))}
  </VStack>
);

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const { navbarHeight } = useNavbarHeight();
  const gardenServices = [
    {
      title: t("services.garden.pruning.title"),
      items: [
        t("services.garden.pruning.small"),
        t("services.garden.pruning.medium"),
        t("services.garden.pruning.large"),
        t("services.garden.pruning.extra_large"),
        t("services.garden.pruning.conifers"),
      ],
    },
    {
      title: t("services.garden.hedge_pruning.title"),
      items: [
        t("services.garden.hedge_pruning.up_to_3m"),
        t("services.garden.hedge_pruning.up_to_5m"),
        t("services.garden.hedge_pruning.over_5m"),
      ],
    },
    {
      title: t("services.garden.treatment.title"),
      items: [
        t("services.garden.treatment.cleaning"),
        t("services.garden.treatment.whitening"),
      ],
    },
    {
      title: t("services.garden.pest_control.title"),
      items: [
        t("services.garden.pest_control.spraying"),
        t("services.garden.pest_control.root_treatment"),
      ],
    },
    {
      title: t("services.garden.fertilization.title"),
      items: [
        t("services.garden.fertilization.spraying"),
        t("services.garden.fertilization.root_liquid"),
        t("services.garden.fertilization.root_dry"),
      ],
    },
    {
      title: t("services.garden.planting.title"),
      items: [t("services.garden.planting.saplings")],
    },
    {
      title: t("services.garden.mulching.title"),
      items: [t("services.garden.mulching.bark")],
    },
    {
      title: t("services.garden.grafting.title"),
      items: [t("services.garden.grafting.cuttings")],
    },
  ];

  const lawnServices = [
    t("services.lawn.scarification"),
    t("services.lawn.mowing_lawnmower"),
    t("services.lawn.mowing_trimmer"),
    t("services.lawn.seeding"),
    t("services.lawn.fertilization"),
    t("services.lawn.weed_control_herbicides"),
    t("services.lawn.weed_control_manual"),
    t("services.lawn.grass_removal"),
  ];

  return (
    <Box
      pt={`${navbarHeight}px`}
      color={useColorModeValue("#485727", "#c5d6a1")}
      mb="8"
    >
      <VStack spacing={8} align="start" maxW="1200px" m="auto">
        <Box
          w="100%"
          textAlign="center"
          bgImg={"image/gr.jpg"}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <Box
            w="100%"
            pt="7vw"
            pb="7vw"
            boxShadow="sm"
            bg={useColorModeValue("whiteAlpha.800", "blackAlpha.800")}
          >
            <Heading
              as="h2"
              size="lg"
              mt="2vw"
              color={useColorModeValue("green.600", "green.200")}
            >
              {t("services.free_consultation")}
            </Heading>

            <Heading as="h3" size="md" mt="2vw" mb="2vw">
              {t("services.maintenance")}
            </Heading>
          </Box>
        </Box>

        <Divider />
        <Box textAlign="center" m="auto">
          <Heading
            as="h3"
            size="lg"
            color={useColorModeValue("green.600", "green.200")}
          >
            {t("services.garden.title")}
          </Heading>
          {gardenServices.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              items={service.items}
            />
          ))}

          <Divider />

          <Heading
            as="h3"
            size="lg"
            color={useColorModeValue("green.600", "green.200")}
          >
            {t("services.lawn.title")}
          </Heading>
          <VStack align="start" spacing={3} py={4} m={"0 5vw"}>
            {lawnServices.map((service, index) => (
              <Text
                textAlign={"start"}
                key={index}
                pl={4}
                _before={{ content: '"• "', color: "green.500" }}
              >
                {service}
              </Text>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default ServicesPage;
