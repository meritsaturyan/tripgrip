import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "🇬🇧 English" },
  { code: "ru", label: "🇷🇺 Русский" },
  { code: "hy", label: "🇦🇲 Հայերեն" }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [open, setOpen] = useState(false);

  const selectedLang = languages.find((lang) => lang.code === currentLang);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        style={{
          padding: "6px 12px",
          border: "2px solid #007bff",
          borderRadius: "6px",
          backgroundColor: "#fff",
          cursor: "pointer",
          minWidth: "100px",
        }}
      >
        {selectedLang?.label || "🌐"}
        <span style={{ marginLeft: 6 }}>▾</span>
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
                cursor: "pointer",
                backgroundColor: lang.code === currentLang ? "#f0f0f0" : "#fff"
              }}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;






