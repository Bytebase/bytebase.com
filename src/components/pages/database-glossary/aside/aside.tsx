'use client';

import { useEffect, useRef } from 'react';

import clsx from 'clsx';

import Link from '@/components/shared/link';

import { GlossaryLetterSet } from '@/types/glossary';

type PostsProps = {
  posts: GlossaryLetterSet[];
  activeHash: string;
};

const Aside = ({ posts, activeHash }: PostsProps) => {
  const navigationRef = useRef<HTMLElement>(null);

  const handleScrollToActiveItem = (hash: string) => {
    if (!navigationRef.current) return;

    if (!hash) {
      navigationRef.current.scrollTop = 0;
      return;
    }

    const item = document.querySelector(`.glossary-aside a[href="#${hash}"]`);
    if (item) {
      const itemRectTop = item.getBoundingClientRect().top;
      navigationRef.current.scrollTop += itemRectTop - 200;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleScrollToActiveItem(activeHash);
    }
  }, [activeHash]);

  return (
    <aside className="glossary-aside col-span-3 lg:hidden">
      <nav
        ref={navigationRef}
        className="scrollbar-hidden sticky top-0 flex max-h-[100vh] flex-col gap-y-11 overflow-y-auto border-l border-gray-90 pl-5"
      >
        {posts.map(({ letter, list }, index) => {
          return (
            <div key={index} className="leading-none">
              <span className="text-14 font-bold tracking-wider">{letter}</span>
              <ul className="mt-4 flex flex-col gap-y-2.5">
                {list.map(({ slug, name }) => {
                  return (
                    <li key={slug} className=" leading-none">
                      <Link
                        href={`#${slug}`}
                        className={clsx(
                          slug === activeHash && 'font-medium text-primary-1',
                          'text-14 leading-tight tracking-tight text-gray-40 hover:text-primary-1',
                        )}
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Aside;
