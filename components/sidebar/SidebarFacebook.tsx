import SidebarTitle from './SidebarTitle';

const SidebarFacebook = () => {
  return (
    <div className="">
      <SidebarTitle title="ហ្វេសបុកផេក" />
      <div id="fb-root"></div>
      <link
        crossOrigin="anonymous"
        href="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=895609560585154&autoLogAppEvents=1"
        nonce="bDROyEmc"
      ></link>
      <div
        className="fb-page mx-auto"
        data-href="https://www.facebook.com/Z1newsnetwork/"
        data-tabs="timeline"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/Z1newsnetwork/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/Z1newsnetwork/">
            Z1 News-បណ្តាញព័ត៌មានអចលនទ្រព្យ
          </a>
        </blockquote>
      </div>
    </div>
  );
};

export default SidebarFacebook;
