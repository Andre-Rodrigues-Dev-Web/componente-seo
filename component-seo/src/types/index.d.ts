import { ReactNode } from 'react';

export interface SeoProps {
  description: string;
  keywords: string;
  author: string;
  ogg: {
    title: string;
    description: string;
    image: string;
  };
  canonicalUrl: string;
  robotTags: string;
  children?: ReactNode;
}
