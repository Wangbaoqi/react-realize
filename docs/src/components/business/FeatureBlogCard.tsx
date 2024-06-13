import React from 'react';
import { Docs } from 'contentlayer/generated';
import {
  ChallengeDifficultyIcon,
  HolidayChristmasTree
} from './HolidayChristmasTree';
import { DifficultyBadge } from './CategoryBadge';
import { format } from 'date-fns';
import { BORDERS_BY_DIFFICULTY, SHADOWS_BY_DIFFICULTY } from '@/config/site';
interface CardProps {
  blog: Docs;
  isHoliday?: boolean;
}

export function FeatureBlogCard({ blog, isHoliday = false }: CardProps) {
  return (
    <div
      className={`
        group/card relative overflow-hidden duration-300 rounded-2xl border border-default-200/50 sm:min-w-[300px] sm:max-w-[300px] xl:max-w-[320px]
        ${SHADOWS_BY_DIFFICULTY[blog.category]}
        ${BORDERS_BY_DIFFICULTY[blog.category]}
      `}
    >
      <>
        {isHoliday ? (
          <HolidayChristmasTree difficulty={blog.category} />
        ) : (
          <ChallengeDifficultyIcon difficulty={blog.category} />
        )}
      </>
      <div className='relative flex flex-col items-start gap-1 py-5 p-6'>
        <h2 className='max-w-[75%] truncate text-[20px] font-medium duration-300'>
          {blog.title}
        </h2>
        <div className='flex items-center gap-5 text-center duration-300'>
          <DifficultyBadge category={blog.category} />
        </div>
      </div>
      <section className='relative flex flex-col justify-between gap-2 rounded-xl p-6 pt-0 pb-0 duration-300'>
        <div className='flex items-center gap-2 flex-nowrap'>
          <div className='-ml-[0.33rem] flex h-auto w-fit items-center whitespace-nowrap rounded-full bg-transparent py-1 pl-[0.33rem] pr-2 text-xs font-bold text-neutral-700 duration-300 hover:bg-black/10 dark:text-white dark:hover:bg-white/20'>
            @{blog.author || 'NateWang'}
          </div>
          <div className='text-default-500 whitespace-nowrap text-sm'>
            {format(new Date(blog.date), 'yyyy-MM-dd')}
          </div>
        </div>
        <div className='relative h-20 pb-4 leading-[1.425rem] text-sm text-default-500 '>
          <p className='line-clamp-3'>{blog.excerpt}</p>
        </div>
      </section>
    </div>
  );
}
