'use client';

import { ReactNode, useMemo, useRef, useState } from 'react';

import { GlossaryLetterSet } from '@/types/glossary';

import Filter from '../filter';
import Posts from '../posts';

type GlossaryLayoutProps = {
  posts: GlossaryLetterSet[];
  children: ReactNode;
  filters: [string, number][];
};

const GlossaryLayout = ({ posts, filters, children }: GlossaryLayoutProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLElement>(null);

  const filteredItems = useMemo(() => {
    if (activeFilters.length === 0) return posts;

    return posts
      .map((post) => ({
        ...post,
        list: post.list.filter((item) => item.tagList.some((tag) => activeFilters.includes(tag))),
      }))
      .filter((post) => post.list.length > 0);
  }, [activeFilters]);

  const toggleFilter = (filter: string) => {
    if (wrapperRef.current && window?.scrollY > wrapperRef?.current?.offsetTop) {
      window.scrollTo(0, wrapperRef.current.offsetTop);
    }
    setActiveFilters(
      activeFilters.includes(filter)
        ? activeFilters.filter((f) => f !== filter)
        : [...activeFilters, filter],
    );
  };

  return (
    <>
      {children}
      <section ref={wrapperRef} className="container pt-16 lg:pt-12 md:pt-8 sm:pt-6">
        <div className="gap-x-grid grid grid-cols-12">
          <Posts posts={filteredItems} />
          <Filter
            className="col-span-3 md:hidden"
            fieldsList={filters}
            activeFilters={activeFilters}
            toggleFilter={toggleFilter}
          />
        </div>
      </section>
    </>
  );
};

export default GlossaryLayout;
