'use client';
import React from 'react';
import { ChevronRightLinearIcon } from './linear';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { BUTTON_BY_TAGS } from '@/config/site';
interface ViewMoreButtonProps {
  redirectRoute: string;
  tag: keyof typeof BUTTON_BY_TAGS;
}

export function MoreButton({ redirectRoute, tag }: ViewMoreButtonProps) {
  const router = useRouter();
  return (
    <Button
      className={`group items-center whitespace-nowrap pl-4 pr-2 backdrop-blur-sm ${BUTTON_BY_TAGS[tag]}`}
      onClick={() => router.push(redirectRoute)}
      radius='full'
      size='sm'
    >
      View More
      <ChevronRightLinearIcon className='ml-2 h-4 w-4 stroke-[3] duration-300 group-hover:translate-x-1' />
    </Button>
  );
}
