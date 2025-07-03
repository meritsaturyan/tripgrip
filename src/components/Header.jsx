import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";
import LangSelector from "../components/LangSelector";
import { useCurrency } from "../CurrencyContext";
import { basePath } from "../utils/basePath";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: white;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 60px;
  width: auto;

  @media (max-width: 480px) {
    height: 40px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: white;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  border-top: 1px solid #eee;
  padding: 16px;
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #555;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #1a8917;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 480px) {
    gap: 10px;
    font-size: 0.9rem;
  }
`;

const CurrencySelector = styled.select`
  padding: 6px 12px;
  border-radius: 6px;
  border: 2px solid #007bff;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 0.85rem;
  }
`;

const BurgerButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
    const { t } = useTranslation();
    const { currency, setCurrency } = useCurrency();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleCurrencyChange = (e) => {
        const selected = e.target.value;
        setCurrency(selected);
        localStorage.setItem("currency", selected);
    };

    return (
        <>
            <HeaderContainer>
                <LogoContainer>
                    <LogoImg src={`${basePath}tripgriplogo.jpeg`} alt="Logo" />
                </LogoContainer>

                <Nav>
                    <NavLink>{t("excursions")}</NavLink>
                    <NavLink>{t("guide")}</NavLink>
                    <NavLink>{t("contacts")}</NavLink>
                    <NavLink>{t("blog")}</NavLink>
                </Nav>

                <Icons>
                    <FaSearch />
                    <FaUser />
                    <LangSelector />
                    <CurrencySelector value={currency} onChange={handleCurrencyChange}>
                        <option value="AED">AED</option>
                        <option value="AMD">AMD</option>
                        <option value="USD">USD</option>
                    </CurrencySelector>
                    <BurgerButton onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                        <FaBars />
                    </BurgerButton>
                </Icons>
            </HeaderContainer>

            {isMobileMenuOpen && (
                <MobileMenu>
                    <NavLink>{t("excursions")}</NavLink>
                    <NavLink>{t("guide")}</NavLink>
                    <NavLink>{t("contacts")}</NavLink>
                    <NavLink>{t("blog")}</NavLink>
                </MobileMenu>
            )}
        </>
    );
};

export default Header;





