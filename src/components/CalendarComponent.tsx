import React from "react";
import { useTranslation } from "react-i18next";
import {
  Text,
  Box,
  Heading,
  List,
  ListItem,
  useBreakpointValue,
  useColorModeValue,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";

const GardenerCalendar: React.FC = () => {
  const { t } = useTranslation();
  const flexDirection: "column" | "row" | undefined = useBreakpointValue({
    base: "column",
    md: "row",
  });

  return (
    <Box w="100%">
      <Heading  color={useColorModeValue("green.600", "green.200")}>{t("calendar.title")}</Heading>
      <Divider mt={5} mb={5} />
      <VStack
        pt={7}
        pb={25}
        w="100%"
        bg={useColorModeValue("#e1e6e1", "#192b25")}
      >
        <Heading as="h2" >{t("calendar.winter_end.title")}</Heading>
        <Divider mt={5} mb={5} />
        <HStack
          spacing="3vw"
          alignItems={"stretch"}
          flexDirection={flexDirection}
        >
          <Feature
            title={t("calendar.winter_end.garden.title")}
            desc={[
              t("calendar.winter_end.garden.pruning"),
              t("calendar.winter_end.garden.soil_ph"),
              t("calendar.winter_end.garden.pesticides_plan"),
              t("calendar.winter_end.garden.fertilizer_plan"),
            ]}
          />
          <Feature
            title={t("calendar.winter_end.flower_bed.title")}
            desc={[t("calendar.winter_end.flower_bed.soil_ph")]}
          />
          <Feature
            title={t("calendar.winter_end.lawn.title")}
            desc={[
              t("calendar.winter_end.lawn.scarification"),
              t("calendar.winter_end.lawn.soil_ph"),
            ]}
          />
        </HStack>
      </VStack>
      <Divider mt={10} mb={5} />
      <VStack w="100%">
        <Heading as="h2">{t("calendar.spring.title")}</Heading>
        <Divider mt={5} mb={5} />
        <HStack
          spacing="3vw"
          alignItems={"stretch"}
          flexDirection={flexDirection}
        >
          <Feature
            title={t("calendar.spring.garden.title")}
            desc={[
              t("calendar.spring.garden.pruning"),
              t("calendar.spring.garden.frost_damage_treatment"),
              t("calendar.spring.garden.first_fungicide_treatment"),
              t("calendar.spring.garden.planting"),
              t("calendar.spring.garden.grafting"),
              t("calendar.spring.garden.pest_control"),
              t("calendar.spring.garden.fertilization"),
              t("calendar.spring.garden.pruning_hedges"),
              t("calendar.spring.garden.mulching"),
            ]}
          />
          <Feature
            title={t("calendar.spring.flower_bed.title")}
            desc={[
              t("calendar.spring.flower_bed.cleanup"),
              t("calendar.spring.flower_bed.planting"),
              t("calendar.spring.flower_bed.fertilization"),
              t("calendar.spring.flower_bed.weed_removal"),
              t("calendar.spring.flower_bed.mulching"),
            ]}
          />
          <Feature
            title={t("calendar.spring.lawn.title")}
            desc={[
              t("calendar.spring.lawn.scarification"),
              t("calendar.spring.lawn.overseeding"),
              t("calendar.spring.lawn.mowing"),
              t("calendar.spring.lawn.weed_removal"),
              t("calendar.spring.lawn.fertilization"),
              t("calendar.spring.lawn.lawn_repair"),
            ]}
          />
        </HStack>
      </VStack>
      <Divider mt={10} mb={5} />
      <VStack
        pt={7}
        pb={25}
        w="100%"
        bg={useColorModeValue("#e1e6e1", "#192b25")}
      >
        <Heading as="h2">{t("calendar.summer.title")}</Heading>
        <Divider mt={5} mb={5} />
        <HStack
          spacing="3vw"
          alignItems={"stretch"}
          flexDirection={flexDirection}
        >
          <Feature
            title={t("calendar.summer.garden.title")}
            desc={[
              t("calendar.summer.garden.pruning"),
              t("calendar.summer.garden.green_works"),
              t("calendar.summer.garden.planting"),
              t("calendar.summer.garden.pest_control"),
              t("calendar.summer.garden.fertilization"),
              t("calendar.summer.garden.pruning_hedges"),
              t("calendar.summer.garden.mulching"),
            ]}
          />
          <Feature
            title={t("calendar.summer.flower_bed.title")}
            desc={[
              t("calendar.summer.flower_bed.planting"),
              t("calendar.summer.flower_bed.fertilization"),
              t("calendar.summer.flower_bed.weed_removal"),
              t("calendar.summer.flower_bed.mulching"),
            ]}
          />
          <Feature
            title={t("calendar.summer.lawn.title")}
            desc={[
              t("calendar.summer.lawn.overseeding"),
              t("calendar.summer.lawn.mowing"),
              t("calendar.summer.lawn.weed_removal"),
              t("calendar.summer.lawn.fertilization"),
              t("calendar.summer.lawn.lawn_repair"),
            ]}
          />
        </HStack>
      </VStack>
      <Divider mt={10} mb={5} />
      <VStack w="100%">
        <Heading as="h2">{t("calendar.autumn.title")}</Heading>
        <Divider mt={5} mb={5} />
        <HStack
          spacing="3vw"
          alignItems={"stretch"}
          flexDirection={flexDirection}
        >
          <Feature
            title={t("calendar.autumn.garden.title")}
            desc={[
              t("calendar.autumn.garden.pruning"),
              t("calendar.autumn.garden.planting"),
              t("calendar.autumn.garden.pest_control"),
              t("calendar.autumn.garden.fertilization"),
              t("calendar.autumn.garden.pruning_hedges"),
              t("calendar.autumn.garden.mulching"),
              t("calendar.autumn.garden.pit_preparation"),
              t("calendar.autumn.garden.winter_preparation"),
            ]}
          />
          <Feature
            title={t("calendar.autumn.flower_bed.title")}
            desc={[
              t("calendar.autumn.flower_bed.planting"),
              t("calendar.autumn.flower_bed.fertilization"),
              t("calendar.autumn.flower_bed.weed_removal"),
              t("calendar.autumn.flower_bed.mulching"),
            ]}
          />
          <Feature
            title={t("calendar.spring.lawn.title")}
            desc={[
              t("calendar.autumn.lawn.overseeding"),
              t("calendar.autumn.lawn.mowing"),
              t("calendar.autumn.lawn.weed_removal"),
              t("calendar.autumn.lawn.fertilization"),
              t("calendar.autumn.lawn.lawn_repair"),
            ]}
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default GardenerCalendar;

interface FeatureProps {
  title: string;
  desc: Array<string>;
}

const Feature: React.FC<FeatureProps> = ({ title, desc }) => {
  return (
    <Box
      p={"5vw"}
      boxShadow="sm"
      rounded="md"
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <Heading mb={3} fontSize="xl">
        {title}
      </Heading>
      <>
        {desc.map((item, index) => (
          <Text key={index} fontSize="md" mt={1} textAlign={["justify"]}>
            {item}
          </Text>
        ))}
      </>
    </Box>
  );
};
