
import React from 'react';
import { Play, Info } from 'lucide-react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

const Hero: React.FC<HeroProps> = ({ movie, onSelect }) => {
  return (
    <div className="relative w-full h-[80vh] md:h-[95vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={movie.backdrop} 
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-12 max-w-2xl mt-20">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-red-600 text-white text-[10px] font-bold px-1 py-0.5 rounded">ORIGINAL</span>
          <span className="text-sm font-semibold tracking-widest uppercase opacity-70">فيلم مميز</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
          {movie.title}
        </h1>
        <p className="text-sm md:text-lg mb-8 text-gray-200 line-clamp-3 md:line-clamp-none leading-relaxed">
          {movie.description}
        </p>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-6 md:px-10 py-2.5 rounded hover:bg-white/80 transition font-bold">
            <Play fill="currentColor" className="w-5 h-5" />
            شاهد الآن
          </button>
          <button 
            onClick={() => onSelect(movie)}
            className="flex items-center gap-2 bg-gray-500/50 text-white px-6 md:px-10 py-2.5 rounded hover:bg-gray-500/30 transition font-bold backdrop-blur-md"
          >
            <Info className="w-5 h-5" />
            المزيد من المعلومات
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
