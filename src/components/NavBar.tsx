import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Button,
  useColorModeValue,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link as RouterLink } from "react-router-dom";

const Links = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Contacts", id: "contacts" },
  { name: "About Us", id: "about-us" },
];

const NavLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    as={RouterLink}
    to={href}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const flexDirection: "column" | "row" | undefined = useBreakpointValue({
    base: "column",
    md: "row",
  });

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        color={useColorModeValue("#485727", "#c5d6a1")}
        position="fixed"
        w="100%"
        zIndex={"10"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={4}
          pl="5vw"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack>
              <Box>
                <Image
                  src={"image/logo.jpg"}
                  alt="After"
                  objectFit="cover"
                  boxSize="35px"
                  borderRadius="md"
                />
              </Box>
              <Box as="b">{t("logo.logo")}</Box>
            </HStack>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.id} href={`/${link.id}`}>
                  {t(`menu.${link.id}`)}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <LanguageSwitcher />
            <Button
              onClick={toggleColorMode}
              color={useColorModeValue("#485727", "#c5d6a1")}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
        <HStack
          justifyContent={"center"}
          boxShadow="sm"
          py={2}
          spacing="2vw"
          w="100%"
          bg={useColorModeValue("white", "gray.800")}
          flexDirection={flexDirection}
        >
          <Box>(095) 626-61-84</Box>
          <Box>(067) 461-64-36</Box>
        </HStack>

        {isOpen ? (
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <Stack as={"nav"} spacing={4}>
                    {Links.map((link) => (
                      <NavLink key={link.id} href={`/${link.id}`}>
                        {t(`menu.${link.id}`)}
                      </NavLink>
                    ))}
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
