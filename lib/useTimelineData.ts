import { useMemo } from 'react';

interface TimelineItem {
  id: string;
  year: number;
  title: string;
  description: string;
  category: 'choreography' | 'performance' | 'freestyle' | 'breakthrough' | 'collaboration';
  image?: string;
  icon?: string;
}

// Sample timeline data - customize with actual artist data
export const defaultTimelineData: TimelineItem[] = [
  {
    id: 'started-dancing',
    year: 2015,
    title: 'Started Dancing',
    description: 'Began journey into hip-hop and choreography, discovering passion for movement and expression.',
    category: 'breakthrough',
    image: '/timeline/2015-started.jpg',
  },
  {
    id: 'first-choreography',
    year: 2017,
    title: 'First Original Choreography',
    description: 'Created first original piece, blending contemporary with hip-hop influences.',
    category: 'choreography',
    image: '/timeline/2017-choreography.jpg',
  },
  {
    id: 'freestyle-battles',
    year: 2018,
    title: 'Freestyle Battles',
    description: 'Competed in regional freestyle battles, developing improvisational skills and confidence.',
    category: 'freestyle',
    image: '/timeline/2018-freestyle.jpg',
  },
  {
    id: 'performance-breakthrough',
    year: 2019,
    title: 'Performance Breakthrough',
    description: 'Major performance at regional showcase, catching attention of choreographers and producers.',
    category: 'performance',
    image: '/timeline/2019-performance.jpg',
  },
  {
    id: 'collaboration-artists',
    year: 2020,
    title: 'Collaboration Era',
    description: 'Started collaborating with emerging artists, creating fusion choreography pieces.',
    category: 'collaboration',
    image: '/timeline/2020-collaboration.jpg',
  },
  {
    id: 'viral-moment',
    year: 2021,
    title: 'Viral Moment',
    description: 'Creative video gained viral attention, reaching millions of viewers globally.',
    category: 'breakthrough',
    image: '/timeline/2021-viral.jpg',
  },
  {
    id: 'professional-choreographer',
    year: 2023,
    title: 'Professional Choreographer',
    description: 'Established as professional choreographer, working with brands and content creators.',
    category: 'choreography',
    image: '/timeline/2023-professional.jpg',
  },
  {
    id: 'creative-direction',
    year: 2024,
    title: 'Creative Direction Focus',
    description: 'Shifted focus to creative direction and artistic vision for multimedia projects.',
    category: 'performance',
    image: '/timeline/2024-direction.jpg',
  },
];

export function useTimelineData(customData?: TimelineItem[]) {
  const timeline = useMemo(() => {
    return customData || defaultTimelineData;
  }, [customData]);

  const byCategory = useMemo(() => {
    return {
      choreography: timeline.filter((item) => item.category === 'choreography'),
      performance: timeline.filter((item) => item.category === 'performance'),
      freestyle: timeline.filter((item) => item.category === 'freestyle'),
      breakthrough: timeline.filter((item) => item.category === 'breakthrough'),
      collaboration: timeline.filter((item) => item.category === 'collaboration'),
    };
  }, [timeline]);

  const yearRange = useMemo(() => {
    const years = timeline.map((item) => item.year);
    return {
      start: Math.min(...years),
      end: Math.max(...years),
      span: Math.max(...years) - Math.min(...years),
    };
  }, [timeline]);

  return { timeline, byCategory, yearRange };
}
