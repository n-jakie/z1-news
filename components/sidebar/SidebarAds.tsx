import Image from 'next/image';

import SidebarTitle from './SidebarTitle';

const SidebarAds = ({ ads }: any) => {
  return (
    <div>
      <SidebarTitle title="ពានិជ្ជកម្ម" />
      <div className="grid 1 gap-3">
        <div className="w-full h-auto ">
          <Image
            src={ads.featuredImage.sourceUrl}
            alt={ads.featuredImage.title}
            width={1000}
            height={400}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default SidebarAds;
