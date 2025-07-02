import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 60px 20px 0;
  font-family: 'Roboto', sans-serif;
  color: #666;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 1 1 200px;
  margin: 40px 0;

  h4 {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 16px;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    font-size: 0.95rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;

  img {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
`;

const PaymentIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 24px;

  img {
    height: 40px;
    opacity: 0.8;
    filter: grayscale(100%) contrast(120%);
  }
`;

const FooterImage = styled.img`
  width: 100%;
  max-width: 1200px;
  display: block;
  margin: 50px auto 0;
`;

const BottomBar = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #888;
  margin-top: 20px;
  padding: 20px 0;
  border-top: 1px solid #eee;
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <h4>{t('footer.guide')}</h4>
          <ul>
            <li>{t('footer.intro')}</li>
            <li>{t('footer.attractions')}</li>
            <li>{t('footer.transport')}</li>
            <li>{t('footer.news')}</li>
            <li>{t('footer.entertainment')}</li>
            <li>{t('footer.routes')}</li>
            <li>{t('footer.mall')}</li>
            <li>{t('footer.shopping')}</li>
            <li>{t('footer.restaurants')}</li>
            <li>{t('footer.nightlife')}</li>
          </ul>
        </Column>

        <Column>
          <h4>{t('footer.about')}</h4>
          <ul>
            <li>{t('footer.terms')}</li>
            <li>{t('footer.privacy')}</li>
            <li>{t('footer.contacts')}</li>
          </ul>
        </Column>

        <Column>
          <h4>{t('footer.excursions')}</h4>
          <ul>
            <li>{t('footer.blog')}</li>
            <li>{t('footer.faq')}</li>
          </ul>
        </Column>

        <Column>
          <h4>{t('footer.social')}</h4>
          <SocialIcons>
            <img src="/facebook.svg" alt="Facebook" />
            <img src="/vk.svg" alt="VK" />
            <img src="/youtube.svg" alt="YouTube" />
            <img src="/instagram.svg" alt="Instagram" />
          </SocialIcons>

          <PaymentIcons>
            <img src="/tls.png" alt="TLS" />
            <img src="/mastercard.png" alt="Mastercard" />
            <img src="/visa.png" alt="Visa" />
            <img src="/applepay.png" alt="Apple Pay" />
          </PaymentIcons>
        </Column>
      </FooterContent>

      <FooterImage src="/fotofooter.JPEG" alt="Dubai Footer Skyline" />

      <BottomBar>
        © 2015 - 2025 Tripgrip®. {t('footer.madeInDubai')}
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;







