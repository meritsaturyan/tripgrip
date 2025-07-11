import React from 'react';
import { useLocation } from 'react-router-dom';
import tours from '../tours.json';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaClock, FaTicketAlt, FaUsers } from 'react-icons/fa';
import { useCurrency } from '../CurrencyContext';
import { basePath } from '../utils/basePath';

const PageWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1100px;
`;

const TourCard = styled.div`
  width: 345.69px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 172.98px;
  overflow: hidden;
`;

const TourImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Label = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #00bfff;
  color: white;
  font-size: 0.7rem;
  padding: 3px 8px;
  border-radius: 4px;
  z-index: 2;
  text-transform: capitalize;
`;

const TourContent = styled.div`
  padding: 12px;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Info = styled.div`
  font-size: 0.85rem;
  color: #555;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 4px 0;
`;

const Price = styled.div`
  color: #2ecc71;
  font-weight: 600;
  margin-top: 8px;
`;

const SearchResults = () => {
  const { i18n, t } = useTranslation();
  const { currency } = useCurrency();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("s")?.toLowerCase() || "";
  const lang = i18n.language;

  const renderIcon = (name, idx) => {
    if (name === "ticket") return <FaTicketAlt key={idx} color="#27ae60" />;
    if (name === "family") return <FaUsers key={idx} color="#27ae60" />;
    return null;
  };

  const filteredTours = tours.filter((tour) =>
    tour.title[lang].toLowerCase().includes(searchTerm)
  );

  return (
    <PageWrapper>
      <h2>Searching results «{searchTerm}»</h2>

      {filteredTours.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <Grid>
          {filteredTours.map((tour) => (
            <TourCard key={tour.id}>
              <ImageWrapper>
                <TourImage
                  src={tour.image.startsWith("http") ? tour.image : `${basePath}${tour.image}`}
                  alt={tour.title[lang]}
                />
                {tour.labels?.map((label, index) => (
                  <Label
                    key={index}
                    style={label === "15%" ? { backgroundColor: "#ef2325" } : {}}
                  >
                    {t(label)}
                  </Label>
                ))}
              </ImageWrapper>
              <TourContent>
                <Title>{tour.title[lang]}</Title>
                {tour.duration && (
                  <Info>
                    <FaClock /> {tour.duration[lang]}
                  </Info>
                )}
                {tour.icons && (
                  <Info>
                    {tour.icons.map((icon, idx) => renderIcon(icon, idx))}
                  </Info>
                )}
                <Price>
                  {t("from")} {tour.price} {currency}
                </Price>
              </TourContent>
            </TourCard>
          ))}
        </Grid>
      )}
    </PageWrapper>
  );
};

export default SearchResults;






