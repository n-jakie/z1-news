import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

import { News } from '../../../Types/CategoryNews';

const CategoryBigPost = ({ news }: News) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mb-4">
      {/* First Big Post */}
      <div className="bg-[#F8F9FA] md:col-span-2 xl:col-span-4 md:grid md:grid-cols-2">
        <Link href={`/article/${news[0].databaseId}`} className="relative">
          <div className="w-full h-[185px] md:h-full relative post-hover-effect overflow-clip">
            <Image
              alt={news[0].featuredImage.altText}
              src={news[0].featuredImage.sourceUrl}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              priority
              className="object-cover "
            ></Image>
          </div>
        </Link>
        {/* EndImage */}
        <div className=" mt-4 mb-2 px-4 relative">
          <Link href={`/article/${news[0].databaseId}`} className="relative">
            <h3 className="text-textcolor text-base koulen">{news[0].title}</h3>
          </Link>
          <div className="relative w-full border-b-[3px] py-1 before:w-12 before:border-b-2 before:-bottom-[2px] before:border-secondaryColor before:absolute before:left-0 before:contents[''] "></div>
          <div className="mt-1 flex gap-2 items-center">
            <div className="text-[#aaa] text-xs battambang">
              <i className="fa-solid fa-calendar-days mr-1"></i>
              {moment(news[0].date).format('D/MM/YYYY')}
            </div>
            <div>
              {news[0].categories.slice(0, 2).map((categories: any) => (
                <Link
                  href={`/category/${categories.slug}`}
                  key={categories.id}
                  className="text-xs battambang bg-secondaryColor text-white px-2 mx-1"
                >
                  {categories.name}
                </Link>
              ))}
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: news[0].content.slice(0, 200) }}
          />
        </div>
      </div>
      {/* Sub Post */}
      {news.slice(1).map((item: any) => (
        <div key={item.id}>
          <Link href={`/article/${item.databaseId}`} className="relative">
            <div className="h-36 sm:h-[185px] md:h-48 lg:h-[120px] relative post-hover-effect overflow-clip">
              <Image
                alt={item.featuredImage.altText}
                src={item.featuredImage.sourceUrl}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
                className="object-cover"
              ></Image>
            </div>
          </Link>
          <Link href={`/article/${item.databaseId}`} className="relative">
            <div className="koulen my-4">
              <h3 className="text-textcolor text-sm">{item.title}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryBigPost;
