import dynamic from 'next/dynamic';
const NewsCategoryComp = dynamic(
  () => import('../components/home/category/NewsCategoryComp'),
  { ssr: false }
);
const SidebarComp = dynamic(() => import('../components/sidebar/SidebarComp'));
const Layout = dynamic(() => import('../components/Layout'));

import client from '../lib/apollo';
import { GET_HOMEPAGE } from '../queries/service/GET_HOMEPAGE';
import { cleanGraphQLResponse } from '../utils/clean-graphql-response';

const Home = ({ data, loading }: any) => {
  const DATA = cleanGraphQLResponse(data);

  if (loading) {
    return <p>loading...</p>;
  } else if (DATA) {
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
        <div className="container mx-auto px-3 grid grid-cols-1 lg:grid-cols-12">
          {/* Main */}
          <div className="lg:col-span-8 py-3 md:px-3">
            {/* News Category Comp */}
            {/* Real Estate News Category Comp */}
            <NewsCategoryComp
              banner={DATA.CategoryBanner.children[4]}
              categorylink={'realestate'}
              title={'អចលនទ្រព្យ'}
              news={DATA.RealEstateCategoryPost}
            />
            {/* Project News Category Comp */}
            <NewsCategoryComp
              banner={DATA.CategoryBanner.children[3]}
              categorylink={'projects'}
              title={'គំរោង'}
              news={DATA.ProjectCategoryPost}
            />
            {/* Economic News Category Comp */}
            <NewsCategoryComp
              banner={DATA.CategoryBanner.children[2]}
              categorylink={'economic'}
              title={'សេដ្ឋកិច្ច'}
              news={DATA.EconomicCategoryPost}
            />
            {/* Buy Sell News Category Comp */}
            <NewsCategoryComp
              banner={DATA.CategoryBanner.children[1]}
              categorylink={'buysell'}
              title={'ទិញលក់'}
              news={DATA.BuySellCategoryPost}
            />
            {/* Knowledge News Category Comp */}
            <NewsCategoryComp
              banner={DATA.CategoryBanner.children[0]}
              categorylink={'knowledge'}
              title={'ចំណេះដឹងទូទៅ'}
              news={DATA.KnowLedgeCategoryPost}
            />
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-4 md:px-3">
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

export default Home;

export async function getServerSideProps() {
  const { data, loading } = await client.query({
    query: GET_HOMEPAGE,
  });

  return {
    props: {
      data,
      loading,
    },
  };
}
