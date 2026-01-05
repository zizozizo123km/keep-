
import { useState, useEffect } from 'react';
import { Movie, Category } from '../types';
import { INITIAL_MOVIES, CATEGORIES } from '../constants';
import { getRecommendedMovies } from '../services/geminiService';

export const useMovies = () => {
  const [rows, setRows] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      const initialRow = { id: 'trending', title: 'الأكثر تداولاً الآن', movies: INITIAL_MOVIES };
      setRows([initialRow]);

      try {
        const dynamicPromises = CATEGORIES.slice(1).map(async (cat) => {
          const movies = await getRecommendedMovies(cat.id);
          return movies.length > 0 ? { id: cat.id, title: cat.title, movies } : null;
        });

        const results = (await Promise.all(dynamicPromises)).filter(Boolean) as Category[];
        setRows(prev => [...prev, ...results]);
      } catch (err) {
        console.error("Failed to load movies", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  return { rows, isLoading };
};
