import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LangSelector = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: "🇬🇧" },
    { code: "ru", label: "🇷🇺" },
    { code: "hy", label: "🇦🇲" }
  ];

  const currentLang = i18n.language;
  const selected = languages.find((l) => l.code === currentLang);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <span style={{ cursor: "pointer", color: "#1a8917" }}>{t("login")}</span>

      <div style={{ position: "relative" }}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "2px solid #007bff",
            background: "#fff",
            cursor: "pointer",
            fontSize: "18px"
          }}
        >
          {selected?.label || "🌐"} <span style={{ marginLeft: 6 }}>▾</span>
        </button>

        {open && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              marginTop: "4px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              backgroundColor: "#fff",
              zIndex: 10,
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)"
            }}
          >
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                style={{
                  padding: "8px 12px",
                  fontSize: "18px",
                  cursor: "pointer",
                  backgroundColor:
                    lang.code === currentLang ? "#f0f0f0" : "#fff"
                }}
              >
                {lang.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LangSelector;
