import {type NextPage} from 'next';
import Head from 'next/head';

type Props = {
  title?: string;
  page?: string;
  icon?: string;
  keywords?: string;
  description?: string;
  websiteUrl?: string;
  type?: string;
  siteName?: string;
  imageSource?: string;
  imageType?: string;
  imageAltText?: string;
  imageWidth?: string;
  imageHeight?: string;
  twitterCard?: string;
  twitterName?: string;
};

export const Meta: NextPage<Props> = ({
  title = "Let's Exercise",
  page,
  icon,
  keywords,
  description,
  websiteUrl,
  type,
  siteName,
  imageSource,
  imageType,
  imageAltText,
  imageWidth,
  imageHeight,
  twitterCard,
  twitterName,
}) => {
  return (
    <Head>
      {/* General */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta charSet="utf-8"></meta>
      <meta name="robots" content="follow, index" />
      <meta name="keywords" content={keywords}></meta>
      <link rel="canonical" href={websiteUrl} />
      <meta name="description" content={description} />
      <link rel="icon" href={icon ? icon : '/favicon.ico'} />
      <title>{`${title}${page ? ` | ${page}` : ''}`}</title>
      {/* Open Graph */}
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageSource} />
      <meta property="og:image:type" content={imageType} />
      <meta property="og:image:alt" content={imageAltText} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterName} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageSource} />
      <meta name="twitter:image:alt" content={imageAltText} />
    </Head>
  );
};

Meta.defaultProps = {
  page: '',
  keywords:
    'exercise, next.js, nextjs, next-js, next, react.js, reactjs, react-js, react, typescript, chakra-ui, chakra ui, chakra, t3, t3.gg, t3gg, t3gg.com, t3gg.net, t3gg.org, t3gg.io, t3gg.co, t3gg.dev, t3gg.tech, t3gg.app, t3gg.site, t3gg.online, t3gg.store, t3gg.shop, t3gg.store, t3gg',
  description: "No excuses, let's exercise!",
  imageSource: '/images/lets-exercise.png',
  imageType: 'image/png',
  imageAltText: 'Designed by pch.vector / Freepik',
  imageWidth: '2400',
  imageHeight: '1600',
  type: 'website',
  websiteUrl: 'https://lets-exercise.vercel.app/',
  siteName: "Let's exercise!",
  twitterCard: 'summary_large_image',
  twitterName: '@chowjiaming',
};

Meta.displayName = 'Meta';
