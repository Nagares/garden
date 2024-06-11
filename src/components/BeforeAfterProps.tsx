import React from "react";
import {
  Box,
  Image,
  Text,
  HStack,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({
  beforeImage,
  afterImage,
}) => {
  const { t } = useTranslation();
  const flexDirection: "column" | "row" | undefined = useBreakpointValue({
    base: "column",
    md: "row",
  });
  return (
    <HStack
      spacing={4}
      position="static"
      p={4}
      m={"auto"}
      flexDirection={flexDirection}
    >
      <Box position="static">
        <Image
          borderRadius="md"
          src={beforeImage}
          alt="Before"
          objectFit="cover"
          boxSize="500px"
        />
        <Text
          position="relative"
          bottom="20px"
          left="50%"
          transform="translate(-50%, -50%)"
          color={useColorModeValue("#c5d6a1", "#485727")}
          bg={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
          px={3}
          py={1}
          borderRadius="md"
        >
          {t("beforeafter.before")}
        </Text>
      </Box>
      <Box position="static">
        <Image
          src={afterImage}
          alt="After"
          objectFit="cover"
          boxSize="500px"
          borderRadius="md"
        />
        <Text
          position="relative"
          bottom="20px"
          left="50%"
          transform="translate(-50%, -50%)"
          color={useColorModeValue("#c5d6a1", "#485727")}
          bg={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
          px={3}
          py={1}
          borderRadius="md"
        >
          {t("beforeafter.after")}
        </Text>
      </Box>
    </HStack>
  );
};

export default BeforeAfter;
