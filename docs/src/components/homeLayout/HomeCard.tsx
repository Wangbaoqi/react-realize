import React from 'react';
import { MoreButton } from '../icons/MoreButton';
import { Carousel } from './Carousel';
import NextLink from 'next/link';
import { allDocs, Docs } from 'contentlayer/generated';
import { FeatureBlogCard } from './FeatureBlogCard';
import { compareDesc } from 'date-fns';
import { COLORS_BY_TAGS, TITLES_BY_TAG } from '@/config/site';

interface HomeCardProps {
  title: string;
  tag: keyof typeof COLORS_BY_TAGS;
  redirectRoute: string;
}

export function HomeCard({ title, tag, redirectRoute }: HomeCardProps) {
  const docs = allDocs
    .filter((post) => post.category === tag)
    .sort((a: Docs, b: Docs) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );
  return (
    <div>
      <div className='max-w-7xl mx-auto flex items-center justify-between gap-3 px-10 pt-5'>
        <h2
          className={`relative text-3xl font-bold tracking-tight ${TITLES_BY_TAG[tag]}`}
        >
          <div
            className={`absolute -left-8  h-12 w-32 rounded-full ${COLORS_BY_TAGS[tag]}`}
          ></div>
          {title}
        </h2>
        <MoreButton redirectRoute={redirectRoute} tag={tag} />
      </div>
      <section className='relative flex w-full flex-col overflow-hidden rounded-[2.5rem]'>
        <Carousel>
          {docs.map((docs, idx) => (
            <NextLink
              key={idx}
              href={docs.url}
              className='group relative rounded-2xl duration-300 sm:min-w-[300px] xl:min-w-[320px]'
            >
              <FeatureBlogCard blog={docs} isHoliday />
            </NextLink>
          ))}
        </Carousel>
      </section>
    </div>
  );
}
