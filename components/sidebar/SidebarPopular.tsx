import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const SidebarTitle = dynamic(() => import('./SidebarTitle'));

const SidebarPopular = ({ popularnews }: any) => {
  return (
    <>
      <SidebarTitle title="អត្ថបទពេញនិយម" />
      <div>
        <ul className="">
          {popularnews.map((news: any) => (
            <Link href={`/article/${news.databaseId}`} key={news.id}>
              <li className="grid grid-cols-12 gap-4 my-4">
                <div className="relative col-span-5 post-hover-effect overflow-clip">
                  <Image
                    src={news.featuredImage.sourceUrl}
                    alt={news.featuredImage.altText}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    priority
                    className="object-cover"
                  ></Image>
                </div>
                <div className="col-span-7">
                  <h3 className="text-sm">{news.title}</h3>
                  <span className="text-xs text-[#6c757d]">
                    <i className="fa-solid fa-calendar-days mr-1"></i>
                    {moment(news.date).format('DD/MMMM/yyyy hh:mm')}
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidebarPopular;
