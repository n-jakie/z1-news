import React, { useEffect, useState } from 'react';

import moment from 'moment';
import Link from 'next/link';

const LastNewsTextComp = ({ lastposts }: any) => {
  const [currenIndex, setCurrentIndex] = useState(0);

  const prevClickHandler = () => {
    const isFirstSlide = currenIndex === 0;
    const newIndex = isFirstSlide ? lastposts.length - 1 : currenIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextClickHandler = () => {
    const isLastSlide = currenIndex === lastposts.length - 1;
    const newIndex = isLastSlide ? 0 : currenIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    setTimeout(() => {
      const isFirstSlide = currenIndex === 0;
      setCurrentIndex(isFirstSlide ? lastposts.length - 1 : currenIndex - 1);
    }, 5000);
  }, [currenIndex, lastposts.length]);

  return (
    <div className="px-3">
      {/* Label and Navigation */}
      <div className="grid grid-cols-12 gap-4 ">
        {/* Label */}
        <div className="bg-secondaryColor my-4 col-span-7 md:col-span-12 lg:hidden">
          <h1 className="py-2 text-white text-center">ព័ត៌មានចុងក្រោយ</h1>
        </div>
        {/* Navigation */}
        <div className="py-2 bg-secondaryColor my-4 col-span-5 md:hidden text-center text-white">
          <i
            className="fa-solid fa-circle-chevron-left px-2"
            onClick={prevClickHandler}
          ></i>
          <i
            className="fa-solid fa-circle-chevron-right px-2"
            onClick={nextClickHandler}
          ></i>
        </div>
      </div>

      {/* Last News Text Comp */}
      <div
        className="grid md:grid-cols-12  gap-1 justify-between lg:my-4 border border-primaryColor "
        data-aos="flip-left"
      >
        {/* Label LG */}
        <div className="bg-secondaryColor hidden lg:block lg:col-span-2">
          <h1 className="py-2 text-white text-center">ព័ត៌មានចុងក្រោយ</h1>
        </div>
        {/* Post Tag */}
        <div className="flex gap-1 truncate md:col-span-9 items-center">
          <div className="">
            {lastposts[currenIndex].categories
              .slice(0, 2)
              .map((categories: any) => (
                <Link
                  href={`/category/${categories.slug}`}
                  key={categories.id}
                  className="text-[12px] bg-secondaryColor text-white whitespace-pre px-1 mx-1"
                >
                  {categories.name}
                </Link>
              ))}
            <span className="bg-primaryColor text-white px-1 text-[12px] mx-1">
              {moment(lastposts[currenIndex].date).format('DD/MM/YYYY')}
            </span>
          </div>
          <span className="text-[16px] truncate">
            <Link href={`/article/${lastposts[currenIndex].databaseId}`}>
              {lastposts[currenIndex].title}
            </Link>
          </span>
        </div>
        {/* Button MD */}
        <div className=" bg-secondaryColor hidden md:flex justify-center items-center md:col-span-3 lg:col-span-1  text-center text-white w-full max-w-[230px] ">
          <i
            className="fa-solid fa-circle-chevron-left px-2 cursor-pointer"
            onClick={prevClickHandler}
          ></i>
          <i
            className="fa-solid fa-circle-chevron-right px-2 cursor-pointer"
            onClick={nextClickHandler}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default LastNewsTextComp;
