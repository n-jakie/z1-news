import Image from 'next/image';
import Link from 'next/link';

import { LastPost, Tags } from '../../Types/Layout';

const HomeLastNewComp = ({ lastnews }: { lastnews: LastPost }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 px-3">
      {lastnews.map((news: LastPost) => (
        <Link
          key={news.id}
          href={`/article/${news.databaseId}`}
          className="md:first:col-span-2 lg:first:row-span-2 relative h-[170px] md:h-[131px] lg:h-[145px] 2xl:h-[170px] md:first:h-[350px] lg:first:h-auto lg:first:col-span-6 lg:col-span-3 "
        >
          <div className="relative h-full w-full overflow-hidden custom_hover_effect">
            <div className="z-10 absolute  text-white ">
              <div className="flex gap-1">
                {news.categories.slice(0, 2).map((categories: Tags) => (
                  <span
                    key={categories.id}
                    className="bg-secondaryColor px-2 py-1 text-xs"
                  >
                    {categories.name}
                  </span>
                ))}
              </div>
            </div>

            <Image
              alt={news.featuredImage.altText}
              src={news.featuredImage.sourceUrl}
              fill
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className="object-cover"
            />
            <h1 className="absolute custom_title_lastnew w-full -bottom-24 hover:bottom-0 p-[10px] custom_title_effect">
              <span className="text-white text-sm">{news.title}</span>
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeLastNewComp;
