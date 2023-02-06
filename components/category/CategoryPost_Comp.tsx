import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const CategoryPost_Comp = (news: any) => {
  return (
    <div>
      {news.news.map((data: any) => (
        <div
          className="bg-[#F8F9FA] md:col-span-2 xl:col-span-4 md:grid md:grid-cols-2 my-4 border"
          key={data.id}
        >
          <Link href={`/article/${data.databaseId}`} className="relative">
            <div className="w-full h-[185px]  md:h-full relative">
              <Image
                alt={data.featuredImage.altText}
                src={data.featuredImage.sourceUrl}
                fill
                sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
                priority
                className="object-cover"
              ></Image>
            </div>
          </Link>
          {/* EndImage */}
          <div className=" mt-4 mb-2 px-4 relative">
            <Link href={`/article/${data.databaseId}`} className="relative">
              <h3 className="text-textcolor text-base koulen">{data.title}</h3>
            </Link>
            <div className="mt-1 flex gap-2 items-center">
              <div className="text-[#aaa] text-sm battambang">
                <i className="fa-regular fa-user mr-1"></i>
                {data.author.name}
              </div>
              <div className="text-[#aaa] text-sm battambang">
                <i className="fa-solid fa-calendar-days mr-1"></i>
                {moment(data.date).format('D/MM/YYYY')}
              </div>
            </div>
            <div className="relative w-full border-b-[3px] py-1  "></div>
            <div
              dangerouslySetInnerHTML={{ __html: data.content.slice(0, 200) }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPost_Comp;
