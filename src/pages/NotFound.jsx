import React from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return <div style={{ padding: 24 }}>{t("not_found")}</div>;
};

export default NotFound;
