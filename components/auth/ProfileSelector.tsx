
import React from 'react';
import { useApp } from '../../context/AppContext';
import { UserProfile } from '../../types';

const PROFILES: UserProfile[] = [
  { id: '1', name: 'أحمد', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed' },
  { id: '2', name: 'سارة', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara' },
  { id: '3', name: 'الأطفال', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kids' },
];

export const ProfileSelector: React.FC = () => {
  const { setActiveProfile } = useApp();

  return (
    <div className="fixed inset-0 bg-[#141414] z-[1000] flex flex-col items-center justify-center animate-in fade-in duration-500">
      <h1 className="text-3xl md:text-5xl text-white mb-10 font-medium">من يشاهد الآن؟</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {PROFILES.map(profile => (
          <div 
            key={profile.id} 
            onClick={() => setActiveProfile(profile)}
            className="group cursor-pointer flex flex-col items-center gap-4"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded overflow-hidden border-2 border-transparent group-hover:border-white transition-all duration-200">
              <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-gray-400 group-hover:text-white transition text-lg">{profile.name}</span>
          </div>
        ))}
      </div>
      <button className="mt-16 px-6 py-2 border border-gray-500 text-gray-500 hover:text-white hover:border-white transition uppercase tracking-widest text-sm">
        إدارة الملفات الشخصية
      </button>
    </div>
  );
};
