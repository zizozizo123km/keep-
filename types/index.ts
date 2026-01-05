
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

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
}

export interface AppState {
  profile: UserProfile | null;
  myList: string[];
  searchQuery: string;
}
