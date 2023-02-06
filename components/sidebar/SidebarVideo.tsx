import SidebarTitle from './SidebarTitle';

const SidebarVideo = ({ video }: any) => {
  return (
    <div className="my-3">
      <SidebarTitle title="វីដេអូ" />
      <div className="grid grid-cols-1 gap-3">
        {video.children.reverse().map((vdo: any) => (
          <iframe
            key={vdo.id}
            width="100%"
            height=""
            src={`https://www.youtube-nocookie.com/embed/${vdo.embed.ytVideoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default SidebarVideo;
