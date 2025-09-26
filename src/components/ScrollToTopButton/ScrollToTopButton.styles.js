import styled from 'styled-components';

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: none;
  cursor: pointer;
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  visibility: ${props => (props.$isVisible ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const ProgressCircle = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  
  circle {
    fill: transparent;
    stroke: var(--color-accent, #007bff);
    stroke-width: 2;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.3s ease;
  }
`;

export const ArrowIcon = styled.span`
  font-size: 18px;
  font-weight: bold;
  transform: rotate(180deg);
  transition: transform 0.3s ease;
  
  ${ScrollButton}:hover & {
    transform: rotate(0deg);
  }
`;
