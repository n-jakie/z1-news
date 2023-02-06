import dynamic from 'next/dynamic';
const SidebarAds = dynamic(() => import('./SidebarAds'));
const SidebarFacebook = dynamic(() => import('./SidebarFacebook'));
const SidebarLastNews = dynamic(() => import('./SidebarLastNews'));
const SidebarPopular = dynamic(() => import('./SidebarPopular'));
const SidebarSponsor = dynamic(() => import('./SidebarSponsor'));
const SidebarVideo = dynamic(() => import('./SidebarVideo'));

const SidebarComp = ({ popularnews, video, sponsor, ads, lastnews }: any) => {
  return (
    <div className="relative grid gap-2">
      <SidebarPopular popularnews={popularnews} />
      <SidebarFacebook />
      <SidebarVideo video={video} />
      <SidebarSponsor sponsor={sponsor} />
      <SidebarAds ads={ads} />
      <SidebarLastNews lastnews={lastnews} />
    </div>
  );
};

export default SidebarComp;
