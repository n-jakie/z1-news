// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper';
import Link from 'next/link';

const TopBannerSlide = ({ TopAds }: any) => {
  return (
    <div className="w-full h-auto  relative">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        modules={[Autoplay]}
      >
        {TopAds.children.map((data: any) => (
          <SwiperSlide key={data.id}>
            {data.custompage_externallink.posterBanner.mediaItemUrl && (
              <Link
                href={data.custompage_externallink.externalLink}
                className="w-full h-full relative"
              >
                <div className="w-full h-full relative">
                  <video
                    src={data.custompage_externallink.posterBanner.mediaItemUrl}
                    className="object-contain h-auto w-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  />
                </div>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopBannerSlide;
