
import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Movie } from '../types';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies, onSelect }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft + clientWidth : scrollLeft - clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-12 relative group px-4 md:px-12">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-white hover:text-red-600 transition cursor-pointer inline-block">
        {title}
      </h2>
      
      <div className="relative overflow-hidden">
        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-40 bg-black/40 hover:bg-black/60 px-2 opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-40 bg-black/40 hover:bg-black/60 px-2 opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div 
          ref={rowRef}
          className="flex gap-4 overflow-x-auto row-scroll py-4 scroll-smooth"
        >
          {movies.map((movie) => (
            <div 
              key={movie.id}
              onClick={() => onSelect(movie)}
              className="flex-none w-32 md:w-48 aspect-[2/3] relative rounded overflow-hidden cursor-pointer movie-card transition-all duration-300 shadow-xl"
            >
              <img 
                src={movie.image} 
                alt={movie.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center p-2 text-center">
                <span className="text-xs font-bold leading-tight">{movie.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
