import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  ContactContainer,
  ContactCont,
  ContactTitle,
  ContentWrapper,
  LeftSection,
  FormRightSection,
  Subtitle,
  ContactInfo,
  ContactItem,
  ContactIcon,
  ContactText,
  SocialSection,
  SocialIcons,
  SocialIconLink,
  SocialIcon,
  ContactForm,
  FormGroup,
  FormInput,
  FormTextarea,
  SubmitButton,
  ErrorMessage,
  SuccessMessage
} from './Contact.styles';

import githubIcon from '@/assets/icons/github.png';
import linkedinIcon from '@/assets/icons/linkedin.png';
import whatsappIcon from '@/assets/icons/whatsapp.png';

import emailIcon from '@/assets/icons/email.png';
import phoneIcon from '@/assets/icons/phone.png';
import mapIcon from '@/assets/icons/map.png';

// EmailJS configuration from environment variables (Vite)
// Fill these in .env.local

const PUBLIC_KEY = '5LRWbDj8yR2dZ4tBN';
const SERVICE_ID = 'service_69mhp4o';
const TEMPLATE_ID = 'template_9c0yd21';

// Your recipient email, because your template uses To Email = {{email}}
// We pass this variable so EmailJS knows where to send
const TO_EMAIL = 'ucmessina@gmail.com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Function to validate name input
  const validateNameInput = e => {
    const charCode = e.charCode;
    const isValidChar = (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32;

    if (!isValidChar) {
      e.preventDefault();
    }
  };

  // Function to detect malicious content
  const detectMaliciousContent = text => {
    const maliciousPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /onclick|onload|onerror|onmouseover|onkeypress/gi
    ];

    return maliciousPatterns.some(pattern => pattern.test(text));
  };

  // Handle input changes
  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'message' && detectMaliciousContent(value)) {
      setErrors(prev => ({
        ...prev,
        message: 'Message contains suspicious content.'
      }));
      return;
    } else {
      setErrors(prev => ({ ...prev, message: '' }));
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrors({ submit: 'Please fill all required fields.' });
      return;
    }

    // Security validation
    if (detectMaliciousContent(formData.message)) {
      setErrors({ message: 'Security violation detected.' });
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // IMPORTANT: your template currently has "To Email" = {{email}}
      // so we must pass `email: TO_EMAIL` among the variables
      // Prepare formatted date for the template (Italian locale, Europe/Rome timezone)
      const formattedDate = new Intl.DateTimeFormat('it-IT', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Europe/Rome'
      }).format(new Date());

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          // variables used by your template
          from_name: formData.name,
          // keep both for compatibility: some templates use reply_to, others from_email
          reply_to: formData.email,
          from_email: formData.email,
          message: formData.message,
          date: formattedDate,
          email: TO_EMAIL // recipient, to match your template's {{email}}
        },
        { publicKey: PUBLIC_KEY }
      );

      console.log('Email sent successfully:', result);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error('Email sending error:', error);
      const reason = error?.text || error?.message || `status: ${error?.status}`;
      setErrors({
        submit: `Failed to send message: ${reason}`
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactContainer id='contact'>
      <ContactCont>
        <ContactTitle>Get in Touch</ContactTitle>

        <ContentWrapper>
          <LeftSection>
            <Subtitle>Let's work together! Feel free to reach out for collaborations or just to say hello.</Subtitle>

            <ContactInfo>
              <ContactItem>
                <ContactIcon src={emailIcon} alt='Email' />
                <ContactText>ucmessina@gmail.com</ContactText>
              </ContactItem>

              <ContactItem>
                <ContactIcon src={phoneIcon} alt='Phone' />
                <ContactText>+34 647 14 08 18</ContactText>
              </ContactItem>

              <ContactItem>
                <ContactIcon src={mapIcon} alt='Location' />
                <ContactText>Madrid, Spain</ContactText>
              </ContactItem>
            </ContactInfo>

            <SocialSection>
              <SocialIcons>
                <SocialIconLink href='https://github.com/yourprofile' target='_blank' rel='noopener noreferrer'>
                  <SocialIcon src={githubIcon} alt='GitHub' />
                </SocialIconLink>

                <SocialIconLink href='https://linkedin.com/in/yourprofile' target='_blank' rel='noopener noreferrer'>
                  <SocialIcon src={linkedinIcon} alt='LinkedIn' />
                </SocialIconLink>

                <SocialIconLink href='https://wa.me/yourwhatsappnumber' target='_blank' rel='noopener noreferrer'>
                  <SocialIcon src={whatsappIcon} alt='WhatsApp' />
                </SocialIconLink>
              </SocialIcons>
            </SocialSection>
          </LeftSection>

          <FormRightSection>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormInput
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleInputChange}
                  onKeyPress={validateNameInput}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormInput
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormTextarea
                  name='message'
                  placeholder='Your Message'
                  rows='5'
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
              </FormGroup>

              {isSent && <SuccessMessage>✅ Message sent successfully!</SuccessMessage>}
              {errors.submit && <ErrorMessage>❌ {errors.submit}</ErrorMessage>}

              <SubmitButton type='submit' disabled={!!errors.message || isLoading}>
                {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
              </SubmitButton>
            </ContactForm>
          </FormRightSection>
        </ContentWrapper>
      </ContactCont>
    </ContactContainer>
  );
};

export default Contact;
