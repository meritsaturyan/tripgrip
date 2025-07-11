import React, { useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import ToursPage from './pages/ToursPage';
import SearchResults from './components/SearchResults';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import { CurrencyProvider } from './CurrencyContext';
import './i18n';
import TourDetails from "./pages/TourDetails"; // ← ты используешь именно этот

const App = () => {
  const handleScrollToTours = useCallback(() => {
    const el = document.getElementById('tours');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleScrollToFooter = useCallback(() => {
    const el = document.getElementById('footer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <CurrencyProvider>
      <Header 
        onExcursionsClick={handleScrollToTours}
        onContactClick={handleScrollToFooter}
      />
      <Routes>
        <Route path="/" element={<ToursPage />} />
        <Route path="/tour/:id" element={<TourDetails />} /> {/* ← оставляем только один */}
        <Route path="/search" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer id="footer" />
    </CurrencyProvider>
  );
};

export default App;








