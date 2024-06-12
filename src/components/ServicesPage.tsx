import React from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  Stack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ServiceItem = ({ title, items }: { title: string; items: string[] }) => (
  <VStack align="start" spacing={3}>
    <Heading as="h4" size="md">
      {title}
    </Heading>
    {items.map((item, index) => (
      <Text key={index}>{item}</Text>
    ))}
  </VStack>
);

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

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
    <Box p={8}>
      <VStack spacing={8} align="start">
        <Heading as="h2">{t("services.free_consultation")}</Heading>
        <Heading as="h2">{t("services.maintenance")}</Heading>

        <Divider />

        <Heading as="h3">{t("services.garden.title")}</Heading>
        {gardenServices.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            items={service.items}
          />
        ))}

        <Divider />

        <Heading as="h3">{t("services.lawn.title")}</Heading>
        <VStack align="start" spacing={3}>
          {lawnServices.map((service, index) => (
            <Text key={index}>{service}</Text>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default ServicesPage;
