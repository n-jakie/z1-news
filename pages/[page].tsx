import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
const TopBannerSlide = dynamic(
  () => import('../components/category/TopBannerSlide')
);
const SidebarComp = dynamic(() => import('../components/sidebar/SidebarComp'));
const Layout = dynamic(() => import('../components/Layout'));

import client from '../lib/apollo';
import { GET_HOMEPAGE } from '../queries/service/GET_HOMEPAGE';
import { cleanGraphQLResponse } from '../utils/clean-graphql-response';

const Page = ({ data, loading }: any) => {
  const DATA = cleanGraphQLResponse(data);

  const Route = useRouter().query.page;
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
            <TopBannerSlide TopAds={DATA.DetailBanner} />
            {Route === 'terms-conditions' && (
              <>
                <h1 className="uppercase text-2xl koulen pt-6">
                  {DATA.TermsAndConditions.title}
                </h1>
                <hr className="my-4" />
                <div
                  dangerouslySetInnerHTML={{
                    __html: DATA.TermsAndConditions.content,
                  }}
                />
              </>
            )}
            {Route === 'privacy-policy' && (
              <>
                <h1 className="uppercase text-2xl koulen pt-6">
                  {DATA.PolicyPrivacy.title}
                </h1>
                <hr className="my-4" />
                <div
                  dangerouslySetInnerHTML={{
                    __html: DATA.PolicyPrivacy.content,
                  }}
                />
              </>
            )}
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

export default Page;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { page: 'terms-conditions' } },
      { params: { page: 'privacy-policy' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
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
