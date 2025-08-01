import { useState, useMemo } from 'react';
import tours from "../tours.json";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FaClock, FaTicketAlt, FaUsers, FaCreditCard, FaStar, FaPercent } from "react-icons/fa";
import Filters from "./Filters";
import DescriptionBlock from "../components/DescriptionBlock";
import { useCurrency } from "../CurrencyContext";
import { basePath } from "../utils/basePath";
import { Link } from "react-router-dom";

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
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
    z-index: 1;
  }
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

const PageTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  color: #1e7b3c;
  margin-bottom: 12px;
`;

const PageSubtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: #666;
  margin-bottom: 32px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const FeatureWrapper = styled.section`
  background: #f5f5f5;
  padding: 30px 20px;
  margin: 40px 0;
  width: 100%;
`;

const FeatureSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 260px;
  text-align: left;
`;

const FeatureIcon = styled.div`
  color: #1e7b3c;
  font-size: 1.3rem;
`;

const FeatureText = styled.div`
  font-size: 0.95rem;
  color: #444;
`;

const ToursPage = () => {
  const { i18n, t } = useTranslation();
  const { currency } = useCurrency();
  const lang = i18n.language;

  const [sortBy, setSortBy] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedEmirates, setSelectedEmirates] = useState([]);
  const [groupTour, setGroupTour] = useState(false);
  const [individualTour, setIndividualTour] = useState(false);

  const filteredTours = useMemo(() => {
    let result = [...tours];

    if (selectedCategories.length > 0) {
      result = result.filter(tour => selectedCategories.includes(tour.category));
    }

    if (selectedEmirates.length > 0) {
      result = result.filter(tour =>
        selectedEmirates.some(emirate =>
          tour.title?.[lang]?.toLowerCase().includes(emirate.toLowerCase())
        )
      );
    }

    if (groupTour) {
      result = result.filter(t => t.type === "group");
    }

    if (individualTour) {
      result = result.filter(t => t.type === "individual");
    }

    const mappedSort = {
      deals_first: "deals",
      newest_first: "newest",
      popular_first: "popular",
      low_to_high: "priceLowHigh",
      high_to_low: "priceHighLow"
    }[sortBy] || "";

    if (mappedSort === "deals") {
      result = result
        .filter(t => t.labels?.includes("15%") || t.labels?.includes("Special Offer"))
        .concat(result.filter(t => !t.labels?.includes("15%") && !t.labels?.includes("Special Offer")));
    } else if (mappedSort === "newest") {
      result = result.filter(t => t.isNew).concat(result.filter(t => !t.isNew));
    } else if (mappedSort === "popular") {
      result = result
        .filter(t => t.labels?.includes("Popular"))
        .concat(result.filter(t => !t.labels?.includes("Popular")));
    } else if (mappedSort === "priceLowHigh") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (mappedSort === "priceHighLow") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return result;
  }, [sortBy, selectedCategories, selectedEmirates, groupTour, individualTour, lang]);

  const renderIcon = (name, idx) => {
    if (name === "ticket") return <FaTicketAlt key={idx} color="#27ae60" />;
    if (name === "family") return <FaUsers key={idx} color="#27ae60" />;
    return null;
  };

  return (
    <>
      <PageWrapper>
        <PageTitle>{t("toursPage.title")}</PageTitle>
        <PageSubtitle>{t("toursPage.subtitle")}</PageSubtitle>
      </PageWrapper>

      <FeatureWrapper>
        <FeatureSection>
          <Feature>
            <FeatureIcon><FaCreditCard /></FeatureIcon>
            <FeatureText>{t("toursPage.safe_payment")}</FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon><FaStar /></FeatureIcon>
            <FeatureText>{t("toursPage.official_partners")}</FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon><FaPercent /></FeatureIcon>
            <FeatureText>{t("toursPage.special_offers")}</FeatureText>
          </Feature>
        </FeatureSection>
      </FeatureWrapper>

      <PageWrapper id="tours">
        <Filters
          sortOption={sortBy}
          setSortOption={setSortBy}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedEmirates={selectedEmirates}
          setSelectedEmirates={setSelectedEmirates}
          groupTour={groupTour}
          setGroupTour={setGroupTour}
          individualTour={individualTour}
          setIndividualTour={setIndividualTour}
        />

<Grid>
  {filteredTours.map((tour) => (
    <Link
      key={tour.id}
      to={`/tour/${tour.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <TourCard>
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
            <Info><FaClock /> {tour.duration[lang]}</Info>
          )}
          {tour.icons && (
            <Info>{tour.icons.map((icon, idx) => renderIcon(icon, idx))}</Info>
          )}
          <Price>{t("from")} {tour.price} {currency}</Price>
        </TourContent>
      </TourCard>
    </Link>
  ))}
</Grid>

      </PageWrapper>

      <DescriptionBlock />
    </>
  );
};

export default ToursPage;














