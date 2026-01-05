
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserProfile, Movie } from '../types';

interface AppContextType {
  activeProfile: UserProfile | null;
  setActiveProfile: (profile: UserProfile | null) => void;
  myList: string[];
  toggleWatchlist: (movieId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeProfile, setActiveProfile] = useState<UserProfile | null>(null);
  const [myList, setMyList] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleWatchlist = (movieId: string) => {
    setMyList(prev => prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]);
  };

  return (
    <AppContext.Provider value={{ activeProfile, setActiveProfile, myList, toggleWatchlist, searchQuery, setSearchQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
