import styled, { css } from 'styled-components';

export const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: 1px solid #4a5568; /* Grigio scuro */
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  color: #e2e8f0; /* Grigio chiaro per il testo */
  font-family: inherit;
  font-size: 0.9rem;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  min-width: 120px;

  &:hover {
    background-color: #2d3748; /* Sfondo più scuro al passaggio del mouse */
    border-color: #718096;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(99, 179, 237, 0.5); /* Ombra per il focus */
  }
`;

export const Flag = styled.span`
  font-size: 1.1rem;
  margin-right: 8px;
  line-height: 1;
`;

export const LanguageName = styled.span`
  margin-right: auto;
  margin-left: 4px;
`;

export const ChevronIcon = styled.span`
  font-size: 0.8rem;
  transition: transform 0.2s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const LanguageDropdown = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  background-color: #2d3748;
  border: 1px solid #4a5568;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 10;
  overflow: hidden;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
`;

export const LanguageItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;
  color: #e2e8f0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4a5568;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: #4299e1; /* Blu per l'elemento attivo */
      color: white;
    `}
`;
