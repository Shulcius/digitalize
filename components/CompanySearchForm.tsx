// components/CompanySearchForm.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useCompanySearch } from '../hooks/useCompanySearch';

export function CompanySearchForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { results, loading, error, searchCompanies, clearResults } = useCompanySearch();

  // Debounce механизм
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Автопоиск при изменении debouncedQuery
  useEffect(() => {
    if (debouncedQuery.trim().length >= 3) { // Минимум 3 символа
      searchCompanies(debouncedQuery, 'active');
    } else if (debouncedQuery.trim().length === 0) {
      clearResults();
    }
  }, [debouncedQuery, searchCompanies, clearResults]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClear = () => {
    setSearchQuery('');
    clearResults();
  };

  return (
    <div className="glass-card p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Поиск компании</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            ИНН, ОГРН или название компании *
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-[#2291FF] focus:border-[#2291FF] glass pr-10"
              placeholder="Введите ИНН, ОГРН или название компании (минимум 3 символа)"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Поиск начнется автоматически после ввода 3+ символов
          </p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2291FF]"></div>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {results && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Найдено компаний: {results.Count}
              </h3>
              <button
                onClick={handleClear}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Очистить
              </button>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {results.items.map((company, index) => (
                <CompanyCard 
                  key={`${company.ИНН}-${index}`} 
                  company={company} 
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Вынесем карточку компании в отдельный компонент
function CompanyCard({ company }: { company: any }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(true);
    // Здесь можно добавить логику для выбора компании
    console.log('Выбрана компания:', company);
    
    // Можно также передать выбранную компанию родительскому компоненту
    // через callback prop или context
  };

  return (
    <div className={`border rounded-xl p-4 transition-all ${
      isSelected ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
    }`}>
      <h4 className="font-medium text-gray-800">
        {company.НаимСокрЮЛ || company.НаимПолнЮЛ || company.ФИОПолн}
      </h4>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
        <div><strong>ИНН:</strong> {company.ИНН}</div>
        <div><strong>ОГРН:</strong> {company.ОГРН}</div>
        <div><strong>Статус:</strong> 
          <span className={`ml-1 px-2 py-1 rounded-full text-xs ${
            company.Статус.includes('действую') 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {company.Статус}
          </span>
        </div>
        <div><strong>Адрес:</strong> {company.АдресПолн}</div>
        {company.ОснВидДеят && (
          <div className="md:col-span-2">
            <strong>Основной вид деятельности:</strong> {company.ОснВидДеят}
          </div>
        )}
      </div>
      
      <button
        onClick={handleSelect}
        disabled={isSelected}
        className={`mt-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          isSelected
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : 'bg-green-600 text-white hover:bg-green-700'
        }`}
      >
        {isSelected ? 'Выбрана' : 'Выбрать эту компанию'}
      </button>
    </div>
  );
}