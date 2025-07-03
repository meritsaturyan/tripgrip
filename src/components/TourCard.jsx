import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCurrency } from "../CurrencyContext";
import { basePath } from "../utils/basePath";



const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  transition: box-shadow 0.2s ease;
  width: 320px;
  max-width: 100%;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const Info = styled.div`
  padding: 12px;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  margin: 0 0 8px;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const Label = styled.span`
  display: inline-block;
  background: #f3a012;
  color: white;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 6px;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 2px 4px;
  }
`;

const TourCard = ({ tour }) => {
  const { t, i18n } = useTranslation();
  const { currency } = useCurrency();
  const lang = i18n.language;







  return (
    <Link to={`/tour/${tour.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <Card>
      <Image src={`${basePath}${tour.image}`} alt={tour.title[lang]} /> 



        <Info>
          <Title>{tour.title[lang]}</Title>
          {tour.labels && tour.labels.length > 0 && (
            <div>
              {tour.labels.map((label, idx) => (
                <Label key={idx}>{t(label)}</Label>
              ))}
            </div>
          )}
          <Price>
            {t("from")} {tour.price} {currency}
          </Price>
        </Info>
      </Card>
    </Link>
  );
};

export default TourCard;


