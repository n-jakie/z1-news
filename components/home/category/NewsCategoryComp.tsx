import { NewsCategoryComp } from '../../../Types/CategoryNews';
import CategoryBanner from './CategoryBanner';
import CategoryBigPost from './CategoryBigPost';
import NewsCategoryTitle from './NewsCategoryTitle';

const NewsCategoryComp = ({
  banner,
  title,
  categorylink,
  news,
}: NewsCategoryComp) => {
  return (
    <div>
      <CategoryBanner banner={banner} />
      <NewsCategoryTitle title={title} categorylink={categorylink} />
      <CategoryBigPost news={news} />
    </div>
  );
};

export default NewsCategoryComp;
