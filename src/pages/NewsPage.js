import React from "react";
import NewsList from "../components/NewsList";
import Categories from "../components/Categories";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const { category } = useParams();
  const selectedCategory = category || "all";

  console.log(category);

  // const category = match.params.category || 'all'

  return (
    <div>
      <Categories />
      <NewsList category={selectedCategory} />
    </div>
  );
};

export default NewsPage;
