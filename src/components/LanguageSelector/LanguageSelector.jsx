import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  LanguageButton,
  LanguageDropdown,
  LanguageItem,
  Flag,
  LanguageName,
  ChevronIcon
} from './LanguageSelector.styles';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = languageCode => {
    changeLanguage(languageCode);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
      <LanguageButton onClick={toggleDropdown} $isOpen={isOpen}>
        <Flag>{currentLang?.flag}</Flag>
        <LanguageName>{currentLang?.name}</LanguageName>
        <ChevronIcon $isOpen={isOpen}>▼</ChevronIcon>
      </LanguageButton>

      <LanguageDropdown $isOpen={isOpen}>
        {availableLanguages.map(language => (
          <LanguageItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            $isActive={language.code === currentLanguage}
          >
            <Flag>{language.flag}</Flag>
            <LanguageName>{language.name}</LanguageName>
          </LanguageItem>
        ))}
      </LanguageDropdown>
    </div>
  );
};

export default LanguageSelector;
