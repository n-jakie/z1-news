const SidebarTitle = ({ title }: any) => {
  return (
    <div className="bg-[#f5f5f5] my-3 border-b-secondaryColor border-b-2">
      <div className="relative inline-block">
        <h3 className="sidebar-title bg-secondaryColor text-lg text-white py-[10px] px-10 inline-block after:absolute  after:left-[100%] after:-ml-[.1px] after:top-0 after:bg-secondaryColor after:h-full after:w-5 koulen">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default SidebarTitle;
