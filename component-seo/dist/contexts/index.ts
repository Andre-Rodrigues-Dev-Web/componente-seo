import { createContext } from 'react';

export interface SeoContextData {
  description: string;
  keywords: string;
  author: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonicalUrl: string;
  robotTags: string;
}

const SeoContext = createContext<SeoContextData>({
  description: '',
  keywords: '',
  author: '',
  ogTitle: '',
  ogDescription: '',
  ogImage: '',
  canonicalUrl: '',
  robotTags: '',
});

export { SeoContext };

