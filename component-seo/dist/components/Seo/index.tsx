import React, { useContext } from 'react';
import Head from 'next/head';
import { SeoContext } from '../../contexts';
import { SeoProps } from '../../types';
const Seo = ({ description, keywords, author, ogg, canonicalUrl, robotTags, children }: SeoProps) => {
  const seoData = useContext(SeoContext);

  return (
    <Head>
      <title>My Website</title>
      <meta name="description" content={description || seoData.description} />
      <meta name="keywords" content={keywords || seoData.keywords} />
      <meta name="author" content={author || seoData.author} />
      <meta property="og:title" content={ogg?.title || seoData.ogTitle} />
      <meta property="og:description" content={ogg?.description || seoData.ogDescription} />
      <meta property="og:image" content={ogg?.image || seoData.ogImage} />
      <link rel="canonical" href={canonicalUrl || seoData.canonicalUrl} />
      <meta name="robots" content={robotTags || seoData.robotTags} />
      {children}
    </Head>
  );
};

export default Seo;