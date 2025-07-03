import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 60px auto;
  padding: 0 20px;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #888;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 30px;
    margin-bottom: 16px;
    color: #888; 
  }

  p {
    margin-bottom: 16px;
    font-size: 1rem;
  }
  .image {
    width: 300px;
    max-width: 100%;
    height: auto;
    margin: 30px auto 0;
    border-radius: 8px;
    display: block;
  }
`;

const TourButton = styled.button`
  background-color: #1b6934;
  color: #fff;
  border: none;
  padding: 16px 40px;
  font-size: 1.2rem;
  border-radius: 32px;
  cursor: pointer;
  display: block;
  margin: 40px auto 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #15542a;
  }
`;

const DescriptionBlock = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <h2>{t("description.title")}</h2>
      <p>{t("description.intro1")}</p>
      <p>{t("description.intro2")}</p>

      <img
  src="/tripgrip/anapat.jpg"
  alt="Anapat"
  style={{
    width: '400px',
    maxWidth: '100%',
    height: 'auto',
    marginTop: '30px',
    borderRadius: '8px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }}
/>


      <p>{t("description.dubai_text1")}</p>
      <p>{t("description.dubai_text2")}</p>

      <h3>{t("description.subtitle")}</h3>

      <p>{t("description.overview")}</p>
      <p>{t("description.cruise")}</p>
      <p>{t("description.safari")}</p>
      <p>{t("description.kids_parks")}</p>

      <img src="/tripgrip/dubai.jpg" alt="Dubai" className="image" />


      <p>{t("description.waterparks")}</p>
      <p>{t("description.activities")}</p>
      <p>{t("description.custom_tour")}</p>
      <p>{t("description.ending")}</p>

      <TourButton>{t("description.select_tour")}</TourButton>

    </Wrapper>
  );
};

export default DescriptionBlock;



