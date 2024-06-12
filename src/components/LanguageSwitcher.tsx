import React from "react";
import { useTranslation } from "react-i18next";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();
  return (
    <Menu>
      <MenuButton
        as={Button}
        fontSize="md"
        mr="1"
        color={useColorModeValue("#485727", "#c5d6a1")}
        rightIcon={<span>▼</span>}
      >
        {t("header.language")}
      </MenuButton>
      <MenuList color={useColorModeValue("#485727", "#c5d6a1")} fontSize="md">
        <MenuItem onClick={() => changeLanguage("ua")}>Українська</MenuItem>
        <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage("ru")}>Русский</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;
