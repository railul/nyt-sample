export type Edition = 'U.S.' | 'INTERNATIONAL' | 'CANADA' | 'ESPAÑOL' | '中文';

export type Category =
  | 'All'
  | 'World'
  | 'U.S.'
  | 'Politics'
  | 'Business'
  | 'Tech'
  | 'Science'
  | 'Health'
  | 'Sports'
  | 'Arts'
  | 'Books'
  | 'Style'
  | 'Food'
  | 'Travel'
  | 'Magazine'
  | 'T Magazine'
  | 'Real Estate'
  | 'Video'
  | 'Opinion'
  | 'Audio'
  | 'Games'
  | 'Cooking'
  | 'Wirecutter'
  | 'The Athletic';

export interface Comment {
  id: string;
  author: string;
  location: string;
  timestamp: string;
  content: string;
  likes: number;
  isNytPick?: boolean;
}

export interface Article {
  id: string;
  kicker?: string;
  headline: string;
  summary: string;
  byline: string;
  readTime: string;
  date: string;
  section: Category;
  subsection?: string;
  imageUrl?: string;
  imageCaption?: string;
  imageCredit?: string;
  authorTitle?: string;
  authorAvatar?: string;
  paragraphs: string[];
  pullQuote?: {
    text: string;
    attribution?: string;
  };
  comments?: Comment[];
  audioMinutes?: number;
}
