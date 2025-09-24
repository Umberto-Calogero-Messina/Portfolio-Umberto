import styled from 'styled-components';
import { mq } from '../../Styles/styledSystem';

export const Section = styled.section`
  padding-block: 50px 150px;
  padding-inline: 32px;
  background-color: var(--color-bg-dark);
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 15px;
  color: var(--color-accent);
  text-align: center;
  opacity: ${p => (p.$revealed ? 1 : 0)};
  transform: translateY(${p => (p.$revealed ? '0' : '20px')});
  transition: opacity var(--transition-normal), transform var(--transition-normal);
`;

export const Subtitle = styled.h1`
  margin-inline: auto;
  font-size: 38px;
  line-height: 45px;
  font-weight: 600;
  color: var(--color-bg-light);
  text-align: center;
  margin-bottom: 60px;
  opacity: ${p => (p.$revealed ? 1 : 0)};
  transform: translateY(${p => (p.$revealed ? '0' : '20px')});
  transition: opacity var(--transition-normal) 80ms, transform var(--transition-normal) 80ms;
  ${mq.laptop} { width: 900px; }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  column-gap: 100px;
  margin-bottom: 60px;
  ${mq.laptop} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    column-gap: 100px;
  }
  ${mq.desktop} { max-width: 1440px; margin-inline: auto; }
`;

export const Item = styled.div`
  padding-inline: 16px;
  opacity: ${p => (p.$revealed ? 1 : 0)};
`;

export const ItemTitle = styled.h3`
  font-size: 18px;
  display: inline-block;
  border: 1px solid var(--color-accent);
  padding: 11px 24px;
  color: var(--color-accent);
`;

export const ItemDesc = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 10px;
  color: var(--color-bg-light);
`;

export const ItemSub = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.7;
  color: var(--color-text-grey);
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  ${mq.laptop} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
  }
  ${mq.desktop} { max-width: 1440px; margin-inline: auto; }
`;

export const SkillCard = styled.div`
  padding-inline: 16px;
  opacity: ${p => (p.$revealed ? 1 : 0)};
  transform: translateY(${p => (p.$revealed ? '0' : '24px')});
  transition: opacity var(--transition-normal) ${p => p.$delay}ms, transform var(--transition-normal) ${p => p.$delay}ms;
`;

export const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const SkillIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const SkillName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-bg-light);
  margin-right: auto;
`;

export const Bar = styled.div`
  width: 100%;
  height: 10px;
  background-color: var(--border);
  border-radius: 6px;
  overflow: hidden;
`;

export const BarFill = styled.div`
  height: 100%;
  background-color: var(--color-accent);
  width: ${p => p.$width}%;
  transition: width var(--transition-normal);
`;
