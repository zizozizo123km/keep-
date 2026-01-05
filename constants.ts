
import { Movie } from './types';

export const INITIAL_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'سر الرمال',
    description: 'رحلة ملحمية في قلب الصحراء العربية حيث يكتشف بطلنا كنزاً قديماً يغير مجرى التاريخ.',
    image: 'https://picsum.photos/seed/movie1/300/450',
    backdrop: 'https://picsum.photos/seed/movie1/1200/600',
    year: 2024,
    rating: 'PG-13',
    duration: '2h 15m',
    genres: ['مغامرة', 'دراما']
  },
  {
    id: '2',
    title: 'ظلال الماضي',
    description: 'محقق جنائي يواجه قضية غامضة تعيده إلى ذكريات كان يظن أنه نسيها للأبد.',
    image: 'https://picsum.photos/seed/movie2/300/450',
    backdrop: 'https://picsum.photos/seed/movie2/1200/600',
    year: 2023,
    rating: 'R',
    duration: '1h 55m',
    genres: ['غموض', 'جريمة']
  },
  {
    id: '3',
    title: 'أحلام المدينة',
    description: 'قصة حب في شوارع القاهرة المعاصرة، تتحدى الفوارق الاجتماعية والظروف الصعبة.',
    image: 'https://picsum.photos/seed/movie3/300/450',
    backdrop: 'https://picsum.photos/seed/movie3/1200/600',
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    genres: ['رومانسي', 'دراما']
  },
  {
    id: '4',
    title: 'الهروب الكبير',
    description: 'مجموعة من السجناء يخططون لأكبر عملية هروب في تاريخ السجون شديدة الحراسة.',
    image: 'https://picsum.photos/seed/movie4/300/450',
    backdrop: 'https://picsum.photos/seed/movie4/1200/600',
    year: 2022,
    rating: 'TV-MA',
    duration: '2h 10m',
    genres: ['أكشن', 'إثارة']
  },
  {
    id: '5',
    title: 'شمس الغد',
    description: 'في مستقبل بعيد، تحاول البشرية استعادة كوكب الأرض بعد كارثة بيئية كبرى.',
    image: 'https://picsum.photos/seed/movie5/300/450',
    backdrop: 'https://picsum.photos/seed/movie5/1200/600',
    year: 2025,
    rating: 'PG-13',
    duration: '2h 30m',
    genres: ['خيال علمي', 'تشويق']
  },
  {
    id: '6',
    title: 'ليالي الأندلس',
    description: 'دراما تاريخية تستعرض العصر الذهبي للأندلس من خلال عيون شاعر شاب.',
    image: 'https://picsum.photos/seed/movie6/300/450',
    backdrop: 'https://picsum.photos/seed/movie6/1200/600',
    year: 2023,
    rating: 'PG',
    duration: '2h 05m',
    genres: ['تاريخي', 'سيرة ذاتية']
  }
];

export const CATEGORIES = [
  { id: 'trending', title: 'الأكثر تداولاً الآن' },
  { id: 'action', title: 'أفلام حركة ومغامرة' },
  { id: 'drama', title: 'أعمال درامية' },
  { id: 'scifi', title: 'خيال علمي وفانتازيا' }
];
