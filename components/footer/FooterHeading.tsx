const FooterHeading = ({ title }: any) => {
  return (
    <div className="relative my-5">
      <h5 className="bokor text-white text-xl before:absolute before:contents-[] before:w-[50px] before:pb-2 before:border-b-4 before:border-[#FFC107] before:bottom-0 border-b border-b-[#555]">
        {title}
      </h5>
    </div>
  );
};

export default FooterHeading;
