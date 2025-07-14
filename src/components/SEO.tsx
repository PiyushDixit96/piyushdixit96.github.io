import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC = () => {
  const siteMetadata = {
    title: 'Piyush Dixit - Full Stack Developer',
    description: 'Modern developer portfolio showcasing full-stack development projects, skills, and experience. Specializing in React, Node.js, and modern web technologies.',
    url: 'https://piyushdixit96.github.io',
    image: 'https://piyushdixit96.github.io/og-image.jpg',
    author: 'Piyush Dixit',
    keywords: 'developer, portfolio, react, javascript, full-stack, web development, nodejs, frontend, backend',
  };

  return (
    <Helmet>
      <title>{siteMetadata.title}</title>
      <meta name="description" content={siteMetadata.description} />
      <meta name="keywords" content={siteMetadata.keywords} />
      <meta name="author" content={siteMetadata.author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteMetadata.url} />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={siteMetadata.image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteMetadata.url} />
      <meta property="twitter:title" content={siteMetadata.title} />
      <meta property="twitter:description" content={siteMetadata.description} />
      <meta property="twitter:image" content={siteMetadata.image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={siteMetadata.url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
    </Helmet>
  );
};

export default SEO;