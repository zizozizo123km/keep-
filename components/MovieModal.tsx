
import React, { useState, useEffect } from 'react';
import { X, Play, Plus, ThumbsUp, Volume2 } from 'lucide-react';
import { Movie } from '../types';
import { getEnhancedDescription } from '../services/geminiService';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  const [enhancedDesc, setEnhancedDesc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDesc = async () => {
      setLoading(true);
      const desc = await getEnhancedDescription(movie.title);
      setEnhancedDesc(desc);
      setLoading(false);
    };
    fetchDesc();
  }, [movie]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-[#181818] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl scroll-smooth">
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 z-50 bg-black/60 p-1.5 rounded-full hover:bg-white/10 transition"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative aspect-video">
          <img 
            src={movie.backdrop} 
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent" />
          
          <div className="absolute bottom-8 right-8 left-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white text-black px-8 py-2 rounded font-bold hover:bg-white/80 transition shadow-lg">
                <Play fill="currentColor" className="w-5 h-5" />
                شغل
              </button>
              <button className="p-2 border border-gray-500 rounded-full hover:bg-white/10 transition">
                <Plus className="w-5 h-5" />
              </button>
              <button className="p-2 border border-gray-500 rounded-full hover:bg-white/10 transition">
                <ThumbsUp className="w-5 h-5" />
              </button>
            </div>
            <button className="p-2 border border-gray-500 rounded-full hover:bg-white/10 transition">
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4 text-sm font-semibold">
              <span className="text-green-500">98% ملائمة لك</span>
              <span className="border border-gray-500 px-1 rounded">2024</span>
              <span className="border border-gray-500 px-1 rounded">4K</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {movie.description}
            </p>

            <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg mb-6">
              <p className="text-sm font-bold text-red-500 mb-1 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                تحليل الذكاء الاصطناعي للفيلم
              </p>
              <p className="text-gray-200 text-sm">
                {loading ? "جاري استخراج بيانات إضافية من Gemini..." : enhancedDesc}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-gray-500 text-sm">تمثيل: </span>
              <span className="text-sm">أحمد عز، منى زكي، هند صبري</span>
            </div>
            <div>
              <span className="text-gray-500 text-sm">التصنيف: </span>
              <span className="text-sm">{movie.genres.join('، ')}</span>
            </div>
            <div>
              <span className="text-gray-500 text-sm">المدة: </span>
              <span className="text-sm">{movie.duration}</span>
            </div>
            <div>
              <span className="text-gray-500 text-sm">التقييم العمري: </span>
              <span className="text-sm">{movie.rating}</span>
            </div>
          </div>
        </div>

        <div className="px-8 pb-12">
          <h3 className="text-xl font-bold mb-6">عروض مشابهة</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-[#2f2f2f] rounded-lg overflow-hidden cursor-pointer hover:brightness-110 transition">
                <img src={`https://picsum.photos/seed/rel${movie.id}${i}/400/225`} className="w-full aspect-video object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-green-500 text-xs">95% ملائمة</span>
                    <span className="bg-gray-700 px-1 rounded text-[10px]">HD</span>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2">فيلم إثارة ودراما مشوق تدور أحداثه حول خيانة غير متوقعة في عالم المال.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
