/* eslint-disable react/prop-types */
import data from "../../../articles.json";
import Article from "../Article";

const ArticleList = () => {
  return (
    <div className="mt-5 sm:mt-0 m-auto grid sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px] gap-5 max-w-2xl">
      {data.map((props, index) => (
        <Article key={index} {...props} />
      ))}
    </div>
  );
};

export default ArticleList;
