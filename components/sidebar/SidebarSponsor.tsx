import Image from 'next/image';
import Link from 'next/link';

import dynamic from 'next/dynamic';
const SidebarTitle = dynamic(() => import('./SidebarTitle'));

const SidebarSponsor = ({ sponsor }: any) => {
  return (
    <div>
      <SidebarTitle title="អ្នកឧបត្ថម្ភ" />
      <div className="grid 1 gap-3">
        {sponsor.children.reverse().map((sponsor: any) => (
          <Link
            href={sponsor.custompage_externallink.externalLink}
            key={sponsor.id}
          >
            <div className="w-full h-full relative">
              <video
                src={sponsor.custompage_externallink.posterBanner.mediaItemUrl}
                className="object-contain h-full w-[1400px]"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarSponsor;
