import Image from 'next/image';
import Link from 'next/link';

import FooterHeading from './FooterHeading';

const FooterLastNewsComp = ({ lastnews }: any) => {
  return (
    <div>
      {/* LastNews */}
      <div>
        <FooterHeading title="អត្ថបទថ្មីៗ" />
        <div>
          {lastnews.map((news: any) => (
            <Link
              href={`/article/${news.databaseId}`}
              key={news.id}
              className="grid grid-cols-12 mb-[10px] gap-2 border-b border-b-[#555] last:border-none pb-3"
            >
              <div className="col-span-3 relative w-full h-[60px] post-hover-effect overflow-clip">
                <Image
                  alt={news.featuredImage.altText}
                  src={news.featuredImage.sourceUrl}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  className="mr-[10px] object-cover"
                ></Image>
              </div>
              <div className="col-span-9 text-sm text-[#d4d2d4]  flex items-center">
                {news.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLastNewsComp;
