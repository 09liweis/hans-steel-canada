import Head from 'next/head';
import React from 'react';

interface MetaHeadProps {
  title: string;
  description: string;
  keywords?: string;
}

const MetaHead: React.FC<MetaHeadProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default MetaHead;