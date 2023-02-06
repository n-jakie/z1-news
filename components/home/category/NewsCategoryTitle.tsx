import Link from 'next/link';

import { NewsCategoryTitle } from '../../../Types/CategoryNews';

const NewsCategoryTitle = ({ title, categorylink }: NewsCategoryTitle) => {
  return (
    <div className="my-5 bg-[#F8F9FA] relative  flex items-center">
      <div className="relative inline-block">
        <h3 className="bg-secondaryColor text-white block koulen text-xl py-[10px] px-[15px] category-new-title">
          {title}
        </h3>
      </div>
      <div className="pl-10">
        <Link href={`/category/${categorylink}`}>
          <h3 className="underline text-[#6C757D] text-base font-bold">
            មើលព័ត៌មានទាំងអស់
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default NewsCategoryTitle;
