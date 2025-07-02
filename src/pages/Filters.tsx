import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const FiltersWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  background: #fff;
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 40px;
  align-items: flex-start;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  color: #888;
`;

const Label = styled.label`
  margin-bottom: 6px;
  color: #888;
`;

const DropdownWrapper = styled.div`
  position: relative;
  width: 280px;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  border-radius: 0;
  cursor: pointer;

  &::after {
    content: "▾";
    margin-left: 8px;
    font-size: 0.8rem;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  z-index: 100;
  padding: 10px 0 0 0;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: #555;
  padding: 4px 16px;
`;

const Checkbox = styled.input`
  width: 22px;
  height: 22px;
  border-radius: 0;
  appearance: none;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  position: relative;

  &:checked::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 7px;
    width: 6px;
    height: 12px;
    border: solid #1e7b3c;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const ClearButton = styled.button`
  background: #d3d3d3;
  border: none;
  border-radius: 32px;
  padding: 12px 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: "✕";
    font-size: 1rem;
  }
`;

const Filters = () => {
  const { t } = useTranslation();

  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState('');
  const [emirate, setEmirate] = useState('');
  const [groupTour, setGroupTour] = useState(false);
  const [individualTour, setIndividualTour] = useState(false);

  const toggleDropdown = (type: string) => {
    setDropdownOpen(prev => (prev === type ? null : type));
  };

  const handleCheckboxChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSortOption('');
    setEmirate('');
    setGroupTour(false);
    setIndividualTour(false);
  };

  const hasFilters =
    selectedCategories.length > 0 ||
    sortOption !== '' ||
    emirate !== '' ||
    groupTour ||
    individualTour;

  const sortOptions = ['deals_first', 'newest_first', 'popular_first', 'low_to_high', 'high_to_low'];
  const categories = [
    { key: 'overview', label: t('filters.category_overview') },
    { key: 'adventure', label: t('filters.category_adventure') },
    { key: 'tickets', label: t('filters.category_tickets') },
    { key: 'food', label: t('filters.category_food') },
    { key: 'family', label: t('filters.category_family') }
  ];
  const emirates = ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Fujairah'];

  return (
    <>
      <FiltersWrapper>
        <FilterGroup>
          <Label>{t('filters.sorting')}</Label>
          <DropdownWrapper>
            <DropdownButton onClick={() => toggleDropdown('sort')}>
              {t(`filters.${sortOption || 'sort_by'}`)}
            </DropdownButton>
            {dropdownOpen === 'sort' && (
              <DropdownContent>
                {sortOptions.map(option => (
                  <CheckboxLabel key={option}>
                    <Checkbox
                      type="radio"
                      name="sortOption"
                      checked={sortOption === option}
                      onChange={() => { setSortOption(option); setDropdownOpen(null); }}
                    />
                    {t(`filters.${option}`)}
                  </CheckboxLabel>
                ))}
              </DropdownContent>
            )}
          </DropdownWrapper>
        </FilterGroup>

        <FilterGroup>
          <Label>{t('filters.tour_category')}</Label>
          <DropdownWrapper>
            <DropdownButton onClick={() => toggleDropdown('category')}>
              {selectedCategories.length > 0
                ? selectedCategories.map(c => t(`filters.category_${c}`)).join(', ')
                : t('filters.select_category')}
            </DropdownButton>
            {dropdownOpen === 'category' && (
              <DropdownContent>
                {categories.map(({ key, label }) => (
                  <CheckboxLabel key={key}>
                    <Checkbox
                      type="checkbox"
                      checked={selectedCategories.includes(key)}
                      onChange={() => handleCheckboxChange(key)}
                    />
                    {label}
                  </CheckboxLabel>
                ))}
              </DropdownContent>
            )}
          </DropdownWrapper>
        </FilterGroup>

        <FilterGroup>
          <Label>{t('filters.by_emirate')}</Label>
          <DropdownWrapper>
            <DropdownButton onClick={() => toggleDropdown('emirate')}>
              {emirate ? emirate : t('filters.select_emirate')}
            </DropdownButton>
            {dropdownOpen === 'emirate' && (
              <DropdownContent>
                {emirates.map(e => (
                  <CheckboxLabel key={e}>
                    <Checkbox
                      type="radio"
                      name="emirate"
                      checked={emirate === e}
                      onChange={() => { setEmirate(e); setDropdownOpen(null); }}
                    />
                    {e}
                  </CheckboxLabel>
                ))}
              </DropdownContent>
            )}
          </DropdownWrapper>
        </FilterGroup>

        <FilterGroup style={{ marginTop: '-8px' }}>
          <Label>{t('filters.tour_type')}</Label>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                checked={groupTour}
                onChange={() => setGroupTour(prev => !prev)}
              />
              {t('filters.group')}
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                checked={individualTour}
                onChange={() => setIndividualTour(prev => !prev)}
              />
              {t('filters.individual')}
            </CheckboxLabel>
          </div>
        </FilterGroup>

        {hasFilters && (
          <ClearButton onClick={clearFilters}>{t('filters.clear')}</ClearButton>
        )}
      </FiltersWrapper>
    </>
  );
};

export default Filters;











