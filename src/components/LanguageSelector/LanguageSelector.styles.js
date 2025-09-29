import styled, { css } from 'styled-components';
import { mq } from '../../Styles/styledSystem';

export const LanguageDiv = styled.div`
  position: relative;
  padding:4px 24px;

  ${mq.tablet} {
   padding:4px 48px;
  }

  ${mq.laptop} {
   right:0;
   padding:0;
  }
`;

export const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: 1px solid #4a5568; /* Grigio scuro */
  border-radius: 8px;
  width:150px;
  height:40px;
  padding-inline:15px;
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

export const Flag = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
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

  ${mq.laptop} {
    right:0;
    }
`;

export const LanguageItem = styled.div`
  width:150px;
  height:40px;
  padding-inline:25px;
  display: grid;
  grid-template-columns: 20px 1fr;
  gap:10px;
  align-items:center;
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
