import { NavBar, Footer } from '@/components/layout';
import { Suspense } from 'react';
import { HomeCard } from '@/components/business';
import { Metadata } from 'next/types';
import { siteConfig, siteConfigNav } from '@/config/site';

export function generateMetadata(): Metadata {
  return {
    title: `home of ${siteConfig.title}`,
    description: `Home of ${siteConfig.title}, list of blog posts`
  };
}

export default function Home() {
  return (
    <div className='relative flex flex-col'>
      <NavBar />
      <div className='mt-10 min-h-[calc(100vh-_220px)]'>
        {siteConfigNav.map((nav, idx) => {
          return (
            <Suspense fallback={'loading'} key={idx}>
              <HomeCard
                title={`Roadmap of ${nav.title}`}
                tag={nav.label}
                redirectRoute={nav.link}
              />
            </Suspense>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
