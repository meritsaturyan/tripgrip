import React from "react";
import { Routes, Route } from "react-router-dom";
import ToursPage from "./pages/ToursPage";
import TourDetailsPage from "./pages/TourDetailsPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CurrencyProvider } from "./CurrencyContext"; // добавляем провайдер
import "./i18n";

const App = () => {
  return (
    <CurrencyProvider>
      <Header />
      <Routes>
        <Route path="/" element={<ToursPage />} />
        <Route path="/tour/:id" element={<TourDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </CurrencyProvider>
  );
};

export default App;


