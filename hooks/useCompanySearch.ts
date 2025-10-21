// hooks/useCompanySearch.ts
import { useState, useCallback, useRef } from 'react';
import { FNSCompany, FNSResponse } from '../types/fns';

interface UseCompanySearchReturn {
  results: FNSResponse | null;
  loading: boolean;
  error: string | null;
  searchCompanies: (query: string, filter?: string) => Promise<void>;
  clearResults: () => void;
}

export function useCompanySearch(): UseCompanySearchReturn {
  const [results, setResults] = useState<FNSResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const searchCompanies = useCallback(async (query: string, filter?: string) => {
    // Отменяем предыдущий запрос
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Создаем новый AbortController
    abortControllerRef.current = new AbortController();
    
    setLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams({ q: query.trim() });
      if (filter) {
        params.append('filter', filter);
      }

      const response = await fetch(`/api/company/search?${params.toString()}`, {
        signal: abortControllerRef.current.signal,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Ошибка: ${response.status}`);
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err instanceof Error ? err.message : 'Произошла ошибка');
        setResults(null);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const clearResults = useCallback(() => {
    setResults(null);
    setError(null);
  }, []);

  return { results, loading, error, searchCompanies, clearResults };
}