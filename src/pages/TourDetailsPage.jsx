import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TourDetailsPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  return <div style={{ padding: 24 }}>{t("tour_page", { id })}</div>;
};

export default TourDetailsPage;
