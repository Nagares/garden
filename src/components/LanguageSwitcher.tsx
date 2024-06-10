import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();
  return (
    <Menu>
      <MenuButton as={Button} mr={2} rightIcon={<span>▼</span>}>
      {t('header.language')}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => changeLanguage('ua')}>Українська</MenuItem>
        <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage('ru')}>Русский</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;