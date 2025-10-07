import styled from 'styled-components';
import { mq } from '../../Styles/styledSystem';

// Variables
const primaryColor = '#ffffff';
const textColor = '#ffffffdd';
const fontPrimary = "'Inter', sans-serif";
const fontSecondary = "'Oswald', sans-serif";

// Mixins
const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

const absoluteFull = `
  position: absolute;
  left: 0;
  top: 0;
`;

const fontOswald = `
  font-family: ${fontSecondary};
  font-weight: 600;
`;

const cardStyles = `
  background-position: center;
  background-size: cover;
  box-shadow: 6px 6px 10px 2px rgba(0, 0, 0, 0.6);
`;

const pillButton = `
  border-radius: 99px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Components
export const SectionScroll = styled.section`
  background-color: var(--color-bg-darkblue); 
`;

export const MainContainer = styled.div`
  position: relative;
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;

  ${mq.tablet} {
  }

  ${mq.laptop} {
    height: 800px;
  }

  ${mq.desktop} {
    height: 800px;
    max-width: 1440px;
    margin-inline: auto;
  }
`;

export const Card = styled.div`
  ${absoluteFull}
  ${cardStyles}
  width: 100%;
  height: 100%;

  ${mq.tablet} {
  }
`;

export const Details = styled.div`
  position: absolute;
  top: 90px;
  left: 16px;
  color: ${textColor};
  font-family: ${fontPrimary};
  z-index: 22;

  ${mq.tablet} {
    left: 48px;
    top: 90px;
  }

  ${mq.laptop} {
    top: 210px;
    left: 60px;
  }

  ${mq.desktop} {
    left: 80px;
  }
`;

export const TitleBox = styled.div`
  margin-top: 2px;
  width:400px;
  overflow: hidden;
  margin-bottom: 10px;

  ${mq.tablet} {
  }

  ${mq.laptop} {
  }

  ${mq.desktop} {
  }

  .title {
    ${fontOswald}
    font-size: 30px;
    line-height: 1;
    height:100%;
    padding-block:10px;

    ${mq.tablet} {
      font-size: 50px;
    }

    ${mq.laptop} {
      font-size: 50px;
    }

    ${mq.desktop} {
      font-size: 60px;
    }
  }
`;

export const Desc = styled.div`
  margin-top: 56px;
  width: 90%;
  max-width: 400px;
  font-size: 14px;
  line-height: 1.4;

  ${mq.tablet} {
    width: 450px;
    font-size: 16px;
  }

  ${mq.laptop} {
    width: 500px;
    font-size: 18px;
  }

  ${mq.desktop} {
    width: 550px;
    font-size: 20px;
  }
`;

export const Cta = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 24px;
  display: flex;
  align-items: center;

  ${mq.tablet} {
  }

  ${mq.laptop} {
    width: 500px;
  }

  ${mq.desktop} {
    width: 550px;
  }
`;

export const DiscoverButton = styled.a`
  ${pillButton}
  border: 1px solid ${primaryColor};
  background-color: transparent;
  padding: 4px 24px;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  ${mq.tablet} {
  }

  ${mq.laptop} {
    font-size: 16px;
    padding: 8px 32px;
  }

  &:hover {
    background-color: ${primaryColor};
    color: #000;
  }
`;

export const Pagination = styled.div`
  position: absolute;
  width: 94%;
  bottom: 20px;
  left: 16px;
  display: flex;
  align-items: center;
  z-index: 40;

  ${mq.tablet} {
    left: 48px;
    width: 88%;
  }

  ${mq.laptop} {
    width: 50%;
    bottom: 50px;
    left: auto;
    right: 48px;
  }

  ${mq.desktop} {
  }
`;

export const Arrow = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid #ffffff55;
  ${flexCenter}
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  color: #ffffff99;

  ${mq.tablet} {
    width: 45px;
    height: 45px;
  }

  ${mq.laptop} {
    width: 55px;
    height: 55px;
  }

  &:hover:not(:disabled) {
    border-color: #ffffff;
    color: #ffffff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:nth-child(2) {
    margin-left: 20px;

    ${mq.tablet} {
      margin-left: 24px;
    }

    ${mq.laptop} {
      margin-left: 28px;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    stroke-width: 2;

    ${mq.tablet} {
      width: 24px;
      height: 24px;
    }

    ${mq.laptop} {
      width: 28px;
      height: 28px;
    }
  }
`;

export const ProgressContainer = styled.div`
  margin-left: 24px;
  width: calc(100% - 114px);
  height: 50px;
  display: flex;
  align-items: center;

  ${mq.tablet} {
    width: calc(100% - 138px);
  }

  ${mq.laptop} {
  }

  ${mq.desktop} {
  }
`;

export const ProgressBackground = styled.div`
  width: 100%;
  height: 3px;
  background-color: #ffffff33;
  overflow: hidden;
`;

export const ProgressForeground = styled.div`
  height: 3px;
  background-color: ${primaryColor};
  transition: width 0.3s ease;
`;

export const Cover = styled.div`
  ${absoluteFull}
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  pointer-events: none;
  opacity: 0;
  z-index: 100;
`;
