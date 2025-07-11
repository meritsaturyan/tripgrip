import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";
import LangSelector from "../components/LangSelector";
import { useCurrency } from "../CurrencyContext";
import { basePath } from "../utils/basePath";
import GuideMenu from "./GuideMenu";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";
import SearchModal from "./SearchModal";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";







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
const GuideMenuWrapper = styled.div`
  position: relative;

  &:hover > div {
    display: flex;
  }
`;

const GuideDropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #eee;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  padding: 16px;
  border-radius: 8px;
  width: 440px;
  flex-wrap: wrap;
  gap: 16px;
  z-index: 10;
`;

const GuideItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 200px;
  padding: 8px;
  border-radius: 6px;
  transition: background 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    object-fit: cover;
  }

  span {
    font-size: 0.95rem;
    color: #333;
  }
`;
const LoginArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #000;

  &:hover {
    color: #009344;
  }

  svg {
    margin-right: 6px;
  }
`;





const handleContactClick = () => {

    if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
    }
};



const Header = ({ onExcursionsClick, onContactClick }) => {
    const { t } = useTranslation();
    const { currency, setCurrency } = useCurrency();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [showSearch, setShowSearch] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);



    const handleCurrencyChange = (e) => {
        const selected = e.target.value;
        setCurrency(selected);
        localStorage.setItem("currency", selected);
    };

    const handleContactClick = () => {
        onContactClick?.(); // безопасный вызов
    };

    const [isGuideOpen, setIsGuideOpen] = useState(false);


    return (
        <>
            <HeaderContainer>
                <LogoContainer>
                    <LogoImg src={`${basePath}tripgriplogo.jpeg`} alt="Logo" />
                </LogoContainer>

                <Nav>
                    <NavLink onClick={onExcursionsClick}>{t("excursions")}</NavLink>

                    <div
                        onMouseEnter={() => setIsGuideOpen(true)}
                        onMouseLeave={() => setIsGuideOpen(false)}
                        style={{ position: "relative", display: "inline-block" }}
                    >
                        <NavLink style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <span>{t("guide")}</span>
                            {isGuideOpen ? (
                                <FaChevronDown size={12} color="#009344" />
                            ) : (
                                <FaChevronLeft size={12} color="#009344" />
                            )}
                        </NavLink>

                        {isGuideOpen && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: "0",
                                    zIndex: 1000,
                                }}
                            >
                                <GuideMenu />
                            </div>
                        )}
                    </div>






                    <NavLink
                        to="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handleContactClick();
                        }}
                    >
                        {t("contacts")}
                    </NavLink>


                    <NavLink>{t("blog")}</NavLink>
                </Nav>



                <Icons>
                    <FaSearch onClick={() => setShowSearch(true)} style={{ cursor: 'pointer' }} />

                    <LoginArea onClick={() => setShowSignIn(true)}>
                        <FaUser />
                        <span>Sign in</span>
                    </LoginArea>

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
                    <NavLink onClick={() => {
                        onExcursionsClick();
                        setIsMobileMenuOpen(false);
                    }}>
                        {t("excursions")}
                    </NavLink>
                    <NavLink>{t("guide")}</NavLink>
                    <NavLink>{t("contacts")}</NavLink>
                    <NavLink>{t("blog")}</NavLink>
                </MobileMenu>
            )}
            {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
            {showSignIn && <SignInModal
                onClose={() => setShowSignIn(false)}
                setShowSignUp={setShowSignUp}
            />}

            {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}




        </>
    );
};

export default Header;






