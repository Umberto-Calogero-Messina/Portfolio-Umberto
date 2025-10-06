
import { FooterEl, Inner, Brand, Links, LinkItem, HoverLetters, LetterSpan, Copy } from './Footer.styles';
import { useLanguage } from '../../contexts/LanguageContext';

const HoverLettersLink = ({ href, text }) => (
  <HoverLetters href={href} aria-label={text}>
    {text.split('').map((ch, i) => (
      <LetterSpan key={i} style={{ '--i': i }} data-char={ch === ' ' ? '\u00A0' : ch} />
    ))}
  </HoverLetters>
);

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <FooterEl id='footer'>
      <Inner>
        <Brand>Umberto Portfolio</Brand>
        <Links>
          <LinkItem>
            <HoverLettersLink href='#' text={t('footer.terms', 'Terms & Conditions')} />
          </LinkItem>
          <LinkItem>
            <HoverLettersLink href='#' text={t('footer.privacy', 'Privacy Policy')} />
          </LinkItem>
          <LinkItem>
            <HoverLettersLink href='#' text={t('footer.sitemap', 'Site Map')} />
          </LinkItem>
        </Links>
        <Copy>
          © {year} Umberto. {t('footer.allRightsReserved')}
        </Copy>
      </Inner>
    </FooterEl>
  );
};

export default Footer;
