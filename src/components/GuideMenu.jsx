import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { basePath } from "../utils/basePath";


const GuideGrid = styled.div`
  display: flex;
  gap: 60px;
  padding: 32px 40px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
`;

const GuideColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const GuideItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 17px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: background 0.2s ease;

  &:hover {
    background: #f3f3f3;
  }

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    transition: all 0.2s ease;
  }

  span {
    color: #333;
    transition: color 0.2s ease;
  }

  &:hover span {
    color: #1a8917;
  }
`;

const GuideItem = ({ icon, iconHover, label }) => {

  const [hovered, setHovered] = useState(false);

  return (
    <GuideItemWrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={`${basePath}${hovered ? iconHover : icon}`} alt={label} />
      <span>{label}</span>
    </GuideItemWrapper>
  );
};

const GuideMenu = () => {
  const { t } = useTranslation();

  const items = [
    { icon: "map.jpg", iconHover: "map1.PNG", label: t("footer.intro") },
    { icon: "avtobus.jpg", iconHover: "avtobus1.PNG", label: t("footer.transport") },
    { icon: "kaliso.jpg", iconHover: "kaliso1.PNG", label: t("footer.entertainment") },
    { icon: "mall.jpg", iconHover: "mall1.PNG", label: t("footer.mall") },
    { icon: "dzuk.jpg", iconHover: "dzuk1.PNG", label: t("footer.restaurants") },
    { icon: "elalamein.jpg", iconHover: "elalamein1.PNG", label: "Highlights" },
    { icon: "new.jpg", iconHover: "new1.PNG", label: "New in the UAE" },
    { icon: "znak.jpg", iconHover: "znak1.PNG", label: t("footer.routes") },
    { icon: "shopping.jpg", iconHover: "shopping1.PNG", label: t("footer.shopping") },
    { icon: "bar.jpg", iconHover: "bar1.PNG", label: t("footer.nightlife") },
  ];

  const left = items.slice(0, 5);
  const right = items.slice(5);

  return (
    <GuideGrid>
      <GuideColumn>
        {left.map((item, i) => (
          <GuideItem key={i} {...item} />
        ))}
      </GuideColumn>
      <GuideColumn>
        {right.map((item, i) => (
          <GuideItem key={i} {...item} />
        ))}
      </GuideColumn>
    </GuideGrid>
  );
};

export default GuideMenu;




