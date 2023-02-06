import FooterHeading from './FooterHeading';

const FooterAboutComp = ({ about }: any) => {
  return (
    <>
      {/* About Z1News */}
      <div>
        <FooterHeading title="អំពី Z1news" />

        <div
          dangerouslySetInnerHTML={{ __html: about.content }}
          className="text-[16px]  text-[#d4d2d4]"
        />
      </div>
    </>
  );
};

export default FooterAboutComp;
