
import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import MovieModal from './components/MovieModal';
import { ProfileSelector } from './components/auth/ProfileSelector';
import { useMovies } from './hooks/useMovies';
import { Movie } from './types';

const MainContent: React.FC = () => {
  const { activeProfile, searchQuery, setSearchQuery } = useApp();
  const { rows, isLoading } = useMovies();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  if (!activeProfile) return <ProfileSelector />;

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar onSearch={setSearchQuery} />

      {!searchQuery && rows.length > 0 && (
        <Hero 
          movie={rows[0].movies[0]} 
          onSelect={setSelectedMovie} 
        />
      )}

      <main className={`relative z-20 ${searchQuery ? 'pt-24' : '-mt-32 pb-20'}`}>
        {searchQuery ? (
          <div className="px-4 md:px-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-400">النتائج لـ: <span className="text-white">{searchQuery}</span></h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {rows.flatMap(r => r.movies)
                .filter((v, i, a) => a.findIndex(t => t.id === v.id) === i)
                .filter(m => m.title.includes(searchQuery))
                .map(movie => (
                  <div key={movie.id} onClick={() => setSelectedMovie(movie)} className="aspect-[2/3] movie-card rounded overflow-hidden cursor-pointer">
                    <img src={movie.image} className="w-full h-full object-cover" />
                  </div>
                ))}
            </div>
          </div>
        ) : (
          rows.map(category => (
            <MovieRow 
              key={category.id}
              title={category.title}
              movies={category.movies}
              onSelect={setSelectedMovie}
            />
          ))
        )}

        {isLoading && (
          <div className="flex flex-col items-center py-10 gap-4">
             <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
             <p className="text-xs text-gray-500">جاري البحث في الأرشيف بواسطة Gemini...</p>
          </div>
        )}
      </main>

      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
};

export default App;
