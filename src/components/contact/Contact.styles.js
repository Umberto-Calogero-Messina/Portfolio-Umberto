import styled from 'styled-components';
import { mq } from '../../Styles/styledSystem';

// Main container
export const ContactContainer = styled.section`
    height: 950px;
    background-color: var(--color-bg-dark);
    display: flex;
    align-items: center;
    padding-bottom:50px;

  
  ${mq.tablet} {
  }
  
  ${mq.laptop} {
    height: 750px;
     padding-bottom:0px;
  }
`;

export const ContactCont = styled.div`

  
  ${mq.desktop} {
    max-width: 1440px;
    margin-inline: auto;
  }
`;

// Main title
export const ContactTitle = styled.h1`
    font-size: 38px;
    line-height: 45px;
    font-weight: 600;
    text-align: center;
    color: var(--color-bg-light);
    margin-bottom:50px;
  
    ${mq.laptop} {
      margin-bottom:100px;
    }
`;

// Content wrapper with flex layout
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  ${mq.laptop} {
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
`;

// Left section - Contact information
export const LeftSection = styled.div`
  flex: 1;
  
  ${mq.laptop} {
  }
`;

// Section subtitle
export const Subtitle = styled.h2`
    font-weight: 300;
    font-size: 25px;
    line-height: 1.3;
    color: var(--color-bg-light);
    padding-inline:40px;
    text-align:center;
  
  ${mq.tablet} {
     padding-inline:80px;
  }
`;

// Contact information container
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

// Individual contact item
export const ContactItem = styled.div`
    width:160px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Contact icon
export const ContactIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  
  ${mq.tablet} {
    width: 28px;
    height: 28px;
  }
`;

// Contact text
export const ContactText = styled.span`
    font-weight: 300;
    font-size: 0.95rem;
    line-height: 1.3;
    color: var(--color-text-grey);
  
  ${mq.tablet} {

  }
`;

// Social media section
export const SocialSection = styled.div``;

// Social section title
export const SocialTitle = styled.h3`
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-md);
  color: var(--color-text-primary);
`;

// Social icons container
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;

// Social icon link
export const SocialIconLink = styled.a`
    display: grid;
    align-items: center;
    justify-content: center;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

// Social icon image
export const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  
  ${mq.tablet} {
  }
`;

// Right section - Contact form
export const FormRightSection = styled.div`
  flex: 1;
  width:90%;
  margin-inline:auto;
  padding-block:20px;
  
  ${mq.tablet} {
    
  }

  ${mq.laptop} {
    padding-inline:50px;
  }
`;

// Contact form
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding: 30px 40px;
  background-color: var(--color-bg-darkblue);
  border-radius:15px;

`;

// Form group for each input
export const FormGroup = styled.div`
background-color: var(--color-bg-darkblue);
margin-block:10px;
`;

// Form input styles
export const FormInput = styled.input`
    width: 100%;
    font-size: 20px;
    background-color:  var(--color-bg-dark);
    color: var(--color-bg-light);
    padding: 5px;
  &:focus {
  }
  
  &::placeholder {
    font-size: 15px;
  }
`;

// Form textarea styles
export const FormTextarea = styled.textarea`
    width: 100%;
    height: 100px;
     resize: none;
    padding: 5px;
    font-size: 18px;
    background-color:  var(--color-bg-dark);
    color: var(--color-bg-light);

  
  &:focus {
  }
  
  &::placeholder {
    font-size: 15px;
  }

    ${mq.tablet} {
  }
      ${mq.laptop} {
  }
        ${mq.desktop} {
  }
`;

// Submit button
export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: var(--color-bg-dark);
  color: var(--color-accent);
  border-radius: 10px;
  cursor: pointer;
  
  &:hover {
  }
  
  ${mq.tablet} {
  }
`;

export const ErrorMessage = styled.span`
  color: red;
`;

export const SuccessMessage = styled.span`
  color: green;
`;
