import dynamic from 'next/dynamic';
import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
const TopBannerSlide = dynamic(
  () => import('../../components/category/TopBannerSlide')
);
const Layout = dynamic(() => import('../../components/Layout'));
const SidebarComp = dynamic(
  () => import('../../components/sidebar/SidebarComp')
);

import client from '../../lib/apollo';
import { GET_DETAIL_PAGE } from '../../queries/service/GET_DETAIL_PAGE';
import { GET_HOMEPAGE } from '../../queries/service/GET_HOMEPAGE';
import { cleanGraphQLResponse } from '../../utils/clean-graphql-response';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookMessengerShareButton,
  TelegramShareButton,
  LineShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookMessengerIcon,
  TelegramIcon,
  LineIcon,
} from 'react-share';
import Link from 'next/link';
import Image from 'next/image';
import SidebarTitle from '../../components/sidebar/SidebarTitle';
import { Related_Post } from '../../queries/general_data/Related_Post';

const PostDetail = ({ data }: any) => {
  const GetPostData = cleanGraphQLResponse(data);
  const HomePage = useQuery(GET_HOMEPAGE);
  const DATA = cleanGraphQLResponse(HomePage?.data);
  const detailCategoryID = GetPostData.PostDetail.categories[0].id;
  const [releateState, setRelateState] = useState([]);

  useEffect(() => {
    const FetchRelated_Post = async () => {
      const Relate = await client.query({
        query: gql`
         query RelatedPost {
          ${Related_Post}
         }
        `,
      });
      const CleanRelate = cleanGraphQLResponse(Relate.data.RelatedPosts);
      setRelateState(CleanRelate.edges);
    };
    FetchRelated_Post();
  }, []);

  // Function Filter Post
  const filterPost = (posts: any, categoryId: string) => {
    const result: any[] = [];
    posts.forEach((post: any) => {
      post.node.categories.edges.forEach((cat: any) => {
        if (cat.node.id === categoryId) {
          result.push(post);
        }
      });
    });
    return result;
  };

  const FilterResult = filterPost(releateState, detailCategoryID);

  if (!DATA) {
    return (
      <div id="spinner-container">
        <div id="loading-spinner"></div>
      </div>
    );
  } else {
    return (
      <Layout
        flag={DATA.Flag}
        socialmedia={DATA.SocialMedia}
        contactinfo={DATA.ContactInfo}
        logo={DATA.Z1Logo}
        logoads={DATA.TopBanner}
        menu={DATA.menuItems}
        lastposts={DATA.LastPost}
        footerbg={DATA.FooterBG}
        about={DATA.AboutZ1News}
        bottombanner={DATA.BottomBanner}
        topbanner={DATA.TopBanner}
        lastnewbanner={DATA.LastNewAds}
      >
        <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-12 ">
          {/* Main */}
          <div className="lg:col-span-8 py-3 px-3">
            <TopBannerSlide TopAds={GetPostData.DetailBanner} />
            {/* Post Content */}
            <div>
              {/* PostDetail Header */}
              <div className="py-4">
                {/* Title */}
                <h1 className="koulen text-[24px] ">
                  {GetPostData.PostDetail.title}
                </h1>
                {/* Author and Time */}
                <div className="mt-1  items-center md:flex md:justify-between">
                  <div className="flex  gap-2">
                    <div className="text-[#aaa] text-sm battambang">
                      <i className="fa-regular fa-user mr-1"></i>
                      {GetPostData.PostDetail.author.name}
                    </div>
                    <div className="text-[#aaa] text-sm battambang">
                      <i className="fa-solid fa-calendar-days mr-1"></i>
                      {moment(GetPostData.PostDetail.date).format(
                        'D/MM/YYYY HH:MM'
                      )}
                    </div>
                  </div>
                  {/* Share To */}
                  <div className="flex items-center gap-1 my-2">
                    <span className="text-[#aaa] text-sm battambang mr-2">
                      ចែករំលែក
                    </span>
                    <FacebookShareButton url={window.location.href}>
                      <FacebookIcon size={25} round />
                    </FacebookShareButton>
                    <TwitterShareButton url={window.location.href}>
                      <TwitterIcon size={25} round />
                    </TwitterShareButton>
                    <LinkedinShareButton url={window.location.href}>
                      <LinkedinIcon size={25} round />
                    </LinkedinShareButton>
                    <FacebookMessengerShareButton
                      url={window.location.href}
                      appId={''}
                    >
                      <FacebookMessengerIcon size={25} round />
                    </FacebookMessengerShareButton>
                    <TelegramShareButton url={window.location.href}>
                      <TelegramIcon size={25} round />
                    </TelegramShareButton>
                    <LineShareButton url={window.location.href}>
                      <LineIcon size={25} round />
                    </LineShareButton>
                  </div>
                </div>
                {/* Line */}
                <hr className="my-4" />
                {/* Content */}
                <div className="max-w-56">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: GetPostData.PostDetail.content,
                    }}
                  />
                </div>
                {/* Category */}
                <div>
                  <span className=" font-bold text-base">អត្ថបទប្រភេទ៖</span>
                  {GetPostData.PostDetail.categories.map((cat: any) => (
                    <Link key={cat.id} href={`/category/${cat.slug}`}>
                      <span className="bg-secondaryColor text-white text-xs px-1 mx-1">
                        {cat.name}
                      </span>
                    </Link>
                  ))}
                </div>
                {/* Click here to subscribe telegram */}
                <div className="py-2">
                  <Link
                    title="Subscribe"
                    href="https://t.me/z1news_networks"
                    target="_blank"
                    rel="noopener"
                  >
                    <p className="text-blue-500">
                      👉👉👉 ចុច Subscribe ឆានែល Telegram របស់ Z1News
                      ដើម្បីទទួលបានព័ត៌មានថ្មីៗទាន់ចិត្ត
                    </p>
                  </Link>
                </div>
                {/* Feature Image */}
                <div className="relative w-full h-auto my-3">
                  <Image
                    src={GetPostData.PostDetail.featuredImage.sourceUrl}
                    alt={GetPostData.PostDetail.featuredImage.altText}
                    width={1000}
                    height={500}
                  />
                </div>
                {/* Relative Word */}
                <div className="py-7 ">
                  <div className="text-xl bokor pb-2">ពាក្យទាក់ទង</div>
                  <div className="flex gap-1 flex-wrap">
                    {GetPostData.PostDetail.tags.map((tag: any) => (
                      <Link key={tag.id} href={`/tag/${tag.slug}`}>
                        <span className="bg-secondaryColor text-white text-base px-2 whitespace-pre-wrap">
                          {tag.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Button Banner */}
            <TopBannerSlide TopAds={GetPostData.DetailBanner} />
            {/* Relate Posts */}
            <div className="mt-10">
              <SidebarTitle title={'អត្ថបទទាក់ទង'} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FilterResult.slice(0, 6).map((post: any) => (
                  <Link
                    href={`/article/${post.node.databaseId}`}
                    key={post.node.id}
                  >
                    <div className="w-full h-full">
                      <div className="w-full h-[180px] md:h-[120px] relative">
                        <Image
                          src={post.node.featuredImage.node.sourceUrl}
                          alt={post.node.featuredImage.node.altText}
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="koulen text-sm text-textcolor mt-2">
                        {post.node.title}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-4 px-3">
            <SidebarComp
              popularnews={DATA.LastPost}
              video={DATA.SidebarVideo}
              sponsor={DATA.SPONSOR}
              ads={DATA.SidebarAds}
              lastnews={DATA.LastPost}
            />
          </div>
        </div>
      </Layout>
    );
  }
};

export default PostDetail;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query MyQuery2 {
        posts {
          nodes {
            databaseId
          }
        }
      }
    `,
  });

  return {
    paths: data.posts.nodes.map((post: any) => ({
      params: { id: post.databaseId.toString() },
    })),
    fallback: 'blocking', // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }: any) {
  const { data } = await client.query({
    query: GET_DETAIL_PAGE,
    variables: {
      id: params?.id,
    },
  });

  return {
    // Passed to the page component as props
    props: {
      data,
    },
  };
}
