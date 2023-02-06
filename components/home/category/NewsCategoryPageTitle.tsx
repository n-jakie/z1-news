import { NewsCategoryTitle } from '../../../Types/CategoryNews';

const NewsCategoryPageTitle = ({ title, categorylink }: NewsCategoryTitle) => {
  return (
    <div className="my-5 bg-[#F8F9FA] relative  flex items-center">
      <div className="relative inline-block ">
        <h3 className="bg-secondaryColor text-white block koulen text-xl py-[10px] px-[15px] category-new-title">
          {title}
        </h3>
      </div>
      <div className="pl-10">
        <h3 className=" text-[#6C757D] text-base font-bold ">
          មាន {categorylink} អត្ថបទ
        </h3>
      </div>
    </div>
  );
};

export default NewsCategoryPageTitle;
