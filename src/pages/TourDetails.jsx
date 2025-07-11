import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import tours from "../tours.json";
import styled from "styled-components";
import Slider from "react-slick";
import { FaArrowLeft, FaClock, FaUsers, FaTicketAlt, FaCreditCard } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCurrency } from "../CurrencyContext";
import { basePath } from "../utils/basePath";

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #1e7b3c;
  text-align: center;
`;

const StyledSlider = styled(Slider)`
  .slick-slide img {
    width: 100%;
    height: auto;
    max-width: 600px;
    object-fit: cover;
    margin: 0 auto;
    display: block;
    border-radius: 10px;
  }

  .slick-dots li button:before {
    color: #009344;
  }

  .slick-dots li.slick-active button:before {
    color: #009344;
  }

  margin-bottom: 30px;
  text-align: center;
`;


const Info = styled.div`
  margin-top: 20px;
  font-size: 1.1rem;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BackButton = styled.button`
  margin-bottom: 20px;
  padding: 8px 12px;
  background: none;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    border-color: #999;
  }
`;

const BookingForm = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;
  max-width: 400px;
  background: #f8f8f8;
`;

const TourDetailsLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;
    gap: 40px;
  }
`;

const LeftSection = styled.div`
  flex: 2;
`;

const RightSection = styled.div`
  flex: 1;
`;

const TourDetails = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const navigate = useNavigate();
  const { currency } = useCurrency();

  if (!tour) return <p style={{ textAlign: "center" }}>{t("Tour not found")}</p>;

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> {t("Back")}
      </BackButton>
      <Title>{tour.title[lang]}</Title>

      <TourDetailsLayout>
        <LeftSection>
          <StyledSlider
            dots
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={3000}
          >
            {(tour.images || [tour.image]).map((img, i) => (
              <img
                key={i}
                src={`${basePath}${img}`}
                alt={`${tour.title[lang]} ${i + 1}`}
              />
            ))}
          </StyledSlider>

          <Info>
            {tour.duration?.[lang] && (
              <p>
                <FaClock /> {tour.duration[lang]}
              </p>
            )}
            <p>
              <FaUsers /> {t("Group or Individual")}
            </p>
            <p>
              <FaTicketAlt /> {t("from")} {tour.price} {currency}
            </p>
            <p>
              <FaCreditCard /> {t("Secure payment with Visa/Mastercard")}
            </p>
          </Info>
        </LeftSection>

        <RightSection>
          <BookingForm>
            <h3 style={{ marginBottom: "15px" }}>{t("Book this tour")}</h3>
            <label>{t("Select date")}:</label>
            <input
              type="date"
              style={{
                width: "100%",
                marginBottom: "15px",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc"
              }}
            />
            <button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#009344",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              {t("Book")}
            </button>
          </BookingForm>
        </RightSection>
      </TourDetailsLayout>
    </Container>
  );
};

export default TourDetails;




