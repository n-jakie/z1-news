import { useQuery } from '@apollo/client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
const CategoryPost_Comp = dynamic(
  () => import('../../components/category/CategoryPost_Comp')
);
const TopBannerSlide = dynamic(
  () => import('../../components/category/TopBannerSlide')
);
const NewsCategoryPageTitle = dynamic(
  () => import('../../components/home/category/NewsCategoryPageTitle')
);
const Layout = dynamic(() => import('../../components/Layout'));
const SidebarComp = dynamic(
  () => import('../../components/sidebar/SidebarComp')
);
import client from '../../lib/apollo';
import { GET_CATEGORY_POSTS } from '../../queries/service/GET_CATEGORY_PAGE';
import { GET_HOMEPAGE } from '../../queries/service/GET_HOMEPAGE';
import { cleanGraphQLResponse } from '../../utils/clean-graphql-response';

const CategoryPages = ({ data }: any) => {
  const Route = useRouter().query;
  const [routeTitle, setRouteTitle] = useState('');
  const [postOffset, setPostOffset] = useState(0);
  const [pageIndex, setPageIndex] = useState(1);

  const getPostByPagination = useQuery(GET_CATEGORY_POSTS, {
    variables: { category: Route.category_name, offset: postOffset },
  });

  const CleanGetPostByPagination = cleanGraphQLResponse(
    getPostByPagination.data
  );
  const CategoryData = cleanGraphQLResponse(data);
  let TotalPost = data.CategoryPosts.PageInfo.offsetPagination.total;
  const postPerPage = 10;
  const paginationPage = Math.round(TotalPost / postPerPage);

  const HomePage = useQuery(GET_HOMEPAGE);

  const DATA = cleanGraphQLResponse(HomePage?.data);

  useEffect(() => {
    if (Route.category_name === 'projects') {
      setRouteTitle('គំរោងវិនិយោគ');
    } else if (Route.category_name === 'lifestyle') {
      setRouteTitle('បែបផែនជីវិត');
    } else if (Route.category_name === 'knowledge') {
      setRouteTitle('ចំណេះដឹងទូទៅ');
    } else if (Route.category_name === 'economic') {
      setRouteTitle('សេដ្ថកិច្ច');
    } else if (Route.category_name === 'buysell') {
      setRouteTitle('ទិញលក់');
    } else if (Route.category_name === 'realestate') {
      setRouteTitle('អចលនទ្រព្យ');
    }
  }, [Route.category_name]);

  const PageBasePagination = (i: any, x: any) => {
    const page = i + 1;
    setPageIndex(i);
    if (page === 1) {
      setPostOffset(0);
    } else {
      setPostOffset(i * 10);
    }
  };

  if (!DATA) {
    return (
      <div id="spinner-container">
        <div id="loading-spinner"></div>
      </div>
    );
  } else
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
        <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-12">
          {/* Main */}
          <div className="lg:col-span-8 py-3 px-3">
            <TopBannerSlide TopAds={CategoryData.TOPCategoryPageBanner} />
            <NewsCategoryPageTitle
              title={routeTitle}
              categorylink={TotalPost}
            />
            {CleanGetPostByPagination ? (
              <CategoryPost_Comp
                news={CleanGetPostByPagination.CategoryPosts}
              />
            ) : (
              <div id="spinner-container">
                <div id="loading-spinner"></div>
              </div>
            )}

            <TopBannerSlide TopAds={CategoryData.TOPCategoryPageBanner} />
            {/* Pagination */}
            {TotalPost < 10 ? (
              ''
            ) : (
              <div className="my-8 flex justify-center">
                <ul className="inline-flex -space-x-px">
                  {/* Previoes  */}
                  {postOffset >= 10 && (
                    <li>
                      <button
                        onClick={() => setPostOffset(postOffset - 10)}
                        className="px-3 py-2 ml-0 leading-tight  text-[#0d6efd] bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition delay-75"
                      >
                        « Previous
                      </button>
                    </li>
                  )}
                  {Array.apply(0, Array(paginationPage)).map(function (x, i) {
                    return (
                      <li key={i}>
                        <button
                          onClick={() => PageBasePagination(i, x)}
                          value={i + 1}
                          className={` ${
                            i == pageIndex
                              ? 'bg-[#0d6efd] text-white'
                              : 'text-[#0d6efd] hover:bg-blue-100 hover:text-blue-700 transition delay-75'
                          }
                           px-3 py-2 leading-tight  border border-gray-300   dark:border-gray-700 dark:bg-gray-700 dark:text-white transition delay-75`}
                        >
                          {i + 1}
                        </button>
                      </li>
                    );
                  })}
                  {/* Next */}
                  <li>
                    <button
                      onClick={() => setPostOffset(10 + postOffset)}
                      className={` ${
                        postOffset + 10 > TotalPost &&
                        'cursor-not-allowed pointer-events-none'
                      } px-3 py-2 leading-tight text-[#0d6efd] bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white `}
                    >
                      Next »
                    </button>
                  </li>
                </ul>
              </div>
            )}
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
};

export default CategoryPages;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category_name: 'projects' } },
      { params: { category_name: 'lifestyle' } },
      { params: { category_name: 'knowledge' } },
      { params: { category_name: 'economic' } },
      { params: { category_name: 'buysell' } },
    ],
    fallback: 'blocking', // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }: any) {
  const { data } = await client.query({
    query: GET_CATEGORY_POSTS,
    variables: {
      category: params.category_name,
      offset: null,
    },
  });

  return {
    // Passed to the page component as props
    props: { data },
  };
}
