import React, { useState } from 'react';
import styled from 'styled-components';
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";




const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0); /* лёгкое затемнение */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  width: 400px;
`;



const SearchInput = styled.input`
  width: 300px;
  height: 50.5px;
  padding: 0 16px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box; 
  margin-bottom: 12px;
`;

const SearchButton = styled.button`
  width: 300px;
  height: 50.5px;
  background-color: #009344;
  color: white;
  border: none;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-sizing: border-box; 

  &:hover {
    background-color: #007a38;
  }
`;
const CloseIconWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3000;
  cursor: pointer;

  svg {
    width: 84px;
    height: 84px;
    color: gray;
  }
`;










const SearchModal = ({ onClose }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/search?s=${encodeURIComponent(searchQuery.trim())}`);
            onClose(); // закрыть модалку
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <ModalOverlay onClick={onClose}>
            <CloseIconWrapper onClick={onClose}>
                <RxCross2 />
            </CloseIconWrapper>

            <ModalContent onClick={(e) => e.stopPropagation()}>
                <SearchInput
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <SearchButton onClick={handleSearch}>Search</SearchButton>

            </ModalContent>
        </ModalOverlay>
    );
};





export default SearchModal;


