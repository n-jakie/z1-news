import dynamic from 'next/dynamic';
import Script from 'next/script';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Langauge, Layout } from '../Types/Layout';
import { useRouter } from 'next/router';
const LogoAds = dynamic(() => import('./home/LogoAds'));
const LastNewsTextComp = dynamic(() => import('./home/LastNewsTextComp'));
const FooterLastNewsComp = dynamic(() => import('./footer/FooterLastNewsComp'));
const FooterAboutComp = dynamic(() => import('./footer/FooterAboutComp'));
const FooterSocialMedia = dynamic(() => import('./footer/FooterSocialMedia'));
const FooterContact = dynamic(() => import('./footer/FooterContact'));
const LastNewAdsSwiper = dynamic(() => import('./home/LastNewAdsSwiper'));
const HomeLastNewComp = dynamic(() => import('./home/HomeLastNewComp'));

const Layout = ({
  flag,
  socialmedia,
  contactinfo,
  logo,
  logoads,
  children,
  menu,
  lastposts,
  about,
  bottombanner,
  lastnewbanner,
}: Layout) => {
  const router = useRouter();
  const [isMenu, setIsMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isScroll, setIsScroll] = useState('hidden');
  const Route = router.asPath;

  const [searchString, setSearchString] = useState('');
  // SearchSubmit
  const searchHandle = (e: any) => {
    e.preventDefault();
    router.push(`/search/${searchString}`);
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', (event) => {
      let scroll = scrollY;
      if (scroll > 1000) {
        setIsScroll('flex');
      }
      if (scroll < 1000) {
        setIsScroll('hidden');
      }
    });
  }

  return (
    <>
      <Head>
        <title>Z1 News - Beyond Real Estate News</title>
        <meta
          name="description"
          content="Z1 news is media website collect all real estate news in Cambodia."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        />
      </Head>
      {/* Facebook Script */}
      <div id="fb-root"></div>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=895609560585154&autoLogAppEvents=1"
        nonce="CNATzMX5"
      />
      <div className="relative">
        {/* TopNav */}
        <div className="bg-hightlightColor overflow-x-auto">
          <div className="w-full container mx-auto text-[#D4D2C9] flex justify-between px-3 ">
            {/* Langauge */}
            <div className="flex items-center border-gray-700 border-l">
              <div className="dropdown">
                {/* Flag Button */}
                {flag.children.slice(0, 1).map((lang: any) => (
                  <button
                    key={lang.id}
                    className=" flex items-center gap-1 text-sm px-[15px]"
                    type="button"
                  >
                    <div className="w-5 h-3 relative">
                      <Image
                        src={lang.featuredImage.sourceUrl}
                        alt={lang.title}
                        fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                      />
                    </div>
                    {lang.title}
                    <i className="fa-sharp fa-solid fa-xs fa-caret-down ml-1 pr-4"></i>
                  </button>
                ))}
                {/* DropDown Menu Hidden by deafult */}
                <ul className="dropdown-menu hidden absolute z-10 bg-[#343A40] w-[160px] h-[98px] rounded-[4px] top-[34px] py-[10px] ">
                  {flag.children.map((lang: Langauge) => (
                    <Link
                      key={lang.id}
                      className="flex items-center gap-1 text-sm px-[15px] leading-10 hover:bg-[#52575C] "
                      href={lang.custompage_externallink.externalLink}
                    >
                      <div className="relative w-5 h-3">
                        <Image
                          src={lang.featuredImage.sourceUrl}
                          alt={lang.title}
                          fill
                          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                        ></Image>
                      </div>
                      {lang.title}
                    </Link>
                  ))}
                </ul>
              </div>
              {/* Social Media */}
              <div>
                <ul className=" flex">
                  {socialmedia.children.map((social: any) => (
                    <Link href={social.custom_icon.link} key={social.id}>
                      <li
                        className={`px-[15px] h-[40px] flex items-center border-gray-700 border-l`}
                        onMouseEnter={(e: any) =>
                          e.target.nodeName == 'LI'
                            ? (e.target.style.backgroundColor = `${social.custom_icon.backgroundColor}`)
                            : (e.target.style.backgroundColor = ``)
                        }
                        onMouseLeave={(e: any) =>
                          e.target.nodeName == 'LI'
                            ? (e.target.style.backgroundColor = ``)
                            : (e.target.style.backgroundColor = ``)
                        }
                      >
                        <i className={`${social.custom_icon.icon}`}></i>
                      </li>
                    </Link>
                  ))}
                  <li className="flex items-center mt-2">
                    <div
                      className="fb-like"
                      data-href="https://www.facebook.com/Z1newsnetwork/"
                      data-width=""
                      data-layout="button_count"
                      data-action="like"
                      data-size="small"
                      data-share="true"
                    ></div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Contact Info */}
            <div className="contact-info flex items-center text-sm whitespace-nowrap">
              <ul className="flex">
                {contactinfo.children
                  .slice(1)
                  .reverse()
                  .map((contact: any) => (
                    <li
                      key={contact.id}
                      className="border-gray-700 border-l h-10 flex items-center px-[15px] hover:text-white"
                    >
                      <Link href={contact.template.custom_icon.text}>
                        <i
                          className={`${contact.template.custom_icon.icon} mr-2`}
                        ></i>
                        {contact.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Logo and Logo Ads */}
        <div className="grid grid-cols-12 container mx-auto px-3 py-4 gap-4 md:gap-10">
          <div className="col-span-4 min-w-[101px] h-7 sm:h-12 md:h-16 lg:h-28 xl:h- 2xl:h-[856px] relative ">
            <Link href={'/'}>
              <Image
                src={logo.featuredImage.sourceUrl}
                alt={logo.featuredImage.altText}
                fill
                className="object-contain px-3"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              ></Image>
            </Link>
          </div>
          {/* Ads Banner */}
          <div className="col-span-8 relative">
            <LogoAds banner={logoads} />
          </div>
        </div>
        {/* Menu */}
        <div className="bg-primaryColor md:px-3">
          <div className="bg-primaryColor flex justify-between items-center px-3 relative container mx-auto w-full">
            {/* Menu Mobile */}
            <div className="flex items-center lg:hidden ">
              <button
                className="bg-secondaryColor h-[50px]"
                onClick={() => setIsMenu(!isMenu)}
              >
                {isMenu ? (
                  <i className="fa-solid fa-x text-white py-2 px-4 text-xl"></i>
                ) : (
                  <i className="fa-solid fa-bars text-white py-2 px-4 text-xl"></i>
                )}
              </button>
              <h1 className="text-white text-xl font-medium  py-2 px-4 h-full">
                Z1 News
              </h1>
            </div>
            {/* Big Menu */}
            <div className="hidden lg:block px-3">
              <ul className="flex">
                <li
                  className={`text-white text-base leading-[50px] px-5 hover:bg-secondaryColor cursor-pointer bokor border-l border-gray-700 ${
                    Route === '/' ? 'bg-secondaryColor' : ''
                  }`}
                  onClick={() => router.push('/')}
                >
                  អចលនទ្រព្យ
                </li>

                {menu.slice(1).map((item: any) => (
                  <Link href={item.uri} key={item.id}>
                    <li
                      className={`text-white text-base leading-[50px] px-5 hover:bg-secondaryColor cursor-pointer bokor border-l border-gray-700 ${
                        `${Route}/` === item.uri ? 'bg-secondaryColor' : ''
                      }`}
                    >
                      {item.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            {/* Search Icon */}
            <button
              className="hover:bg-secondaryColor h-[50px] "
              onClick={() => setIsSearch(!isSearch)}
            >
              <i className="fa-solid fa-magnifying-glass text-white text-xl py-2 px-4"></i>
            </button>
            {/* Menu Items Darwer*/}
            {isMenu ? (
              <div className="bg-primaryColor absolute bottom-[-250px] w-full left-0 animate__animated animate__bounce z-30">
                <ul>
                  {menu.map((item: any) => (
                    <Link href={item.uri} key={item.id}>
                      <li className="text-white text-base leading-[50px] px-5 hover:bg-secondaryColor  cursor-pointer">
                        {item.label}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ) : null}
            {/* Search Drawer */}
            {isSearch ? (
              <form
                className="absolute -bottom-[54px] right-6 p-2 bg-white border rounded-md "
                onSubmit={searchHandle}
              >
                <input
                  type="text"
                  placeholder="ស្វែងរកពាក្យ..."
                  className="border focus:rounded-none  placeholder:pl-4 focus:outline-secondaryColor"
                  id="search"
                  onChange={(e) => setSearchString(e.target.value)}
                />
                <button
                  className="text-white bg-secondaryColor px-3 py-[2px]  rounded-r-md"
                  type="submit"
                >
                  ស្វែងរក
                </button>
              </form>
            ) : null}
          </div>
        </div>
        {/* LastNews Slider */}
        <div className=" container mx-auto md:px-3">
          <LastNewsTextComp lastposts={lastposts} />
        </div>
        {/* Home Lastnew */}
        {router.asPath === '/' && (
          <>
            <div className="container mx-auto md:px-3 w-full h-14 sm:h-20 md:h-28 lg:h-40 my-3">
              <LastNewAdsSwiper lastnewads={lastnewbanner} />
            </div>
            <div className="container mx-auto md:px-3 ">
              <HomeLastNewComp lastnews={lastposts} />
            </div>
          </>
        )}
        {/* Main Children */}
        <div
          onClick={() => router.push(`${router.asPath}#`)}
          className={`w-10 h-10 bg-secondaryColor ${isScroll} items-center justify-center rounded-md cursor-pointer fixed right-9 bottom-9 z-30 shadow opacity-animation`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </div>
        <main className="max-w-screen-xl mx-auto relative">{children}</main>
        {/* Bottom Banner */}
        <div className="container mx-auto w-full">
          <Link href={bottombanner.custompage_externallink.externalLink}>
            <div className="relative w-full h-auto px-3 py-6">
              <Image
                src={bottombanner.featuredImage.sourceUrl}
                alt={bottombanner.featuredImage.altText}
                width={1296}
                height={160}
                priority
              />
            </div>
          </Link>
        </div>
        <footer>
          <div className="container mx-auto px-3 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 lg:gap-3">
            <FooterLastNewsComp lastnews={lastposts} />
            <FooterAboutComp about={about} />
            <FooterSocialMedia socialmedia={socialmedia} />
            <FooterContact contactinfo={contactinfo} />
          </div>
        </footer>
        <div className=" w-full bg-[#212529]">
          <div className="container mx-auto md:flex">
            <div className=" text-[#d4d4d4] text-center md:text-left py-3 px-4 w-full">
              <p>រក្សា​សិទ្ធិ​គ្រប់​យ៉ាង​ដោយ Z1 News ឆ្នាំ2023.</p>
            </div>
            <div className=" text-[#d4d4d4] text-center  flex gap-2 justify-center md:justify-end py-3 px-4 w-full">
              <Link href={'/terms-conditions'}>លក្ខខណ្ឌ</Link>
              <span>|</span>
              <Link href={'/privacy-policy'}>គោលការណ៏ភាពឯកជន</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
