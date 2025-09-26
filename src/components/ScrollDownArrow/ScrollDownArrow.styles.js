import styled from 'styled-components';

export const ArrowButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 40px;
  height:40px;
  cursor: pointer;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateX(-50%) translateY(-5px);
    background-color: var(--color-accent);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

export const ArrowIcon = styled.span`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;
