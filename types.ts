
export interface Movie {
  id: string;
  title: string;
  description: string;
  image: string;
  backdrop: string;
  year: number;
  rating: string;
  duration: string;
  genres: string[];
}

export interface Category {
  id: string;
  title: string;
  movies: Movie[];
}

// Fixed: Added UserProfile interface which was missing and causing import errors in AppContext.tsx and ProfileSelector.tsx
export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
}

// Added AppState for state management consistency
export interface AppState {
  profile: UserProfile | null;
  myList: string[];
  searchQuery: string;
}
