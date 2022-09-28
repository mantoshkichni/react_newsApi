import { categories } from "./api";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import axios from "axios";
import { useContext, useEffect } from "react";
import { ApiContext } from "./Context";

const Category = () => {
  const {
    categoryNews,
    setCategoryNews,
    showsourceNews,
    setshowsourceNews,
    showcategoryNews,
    setshowcategoryNews
  } = useContext(ApiContext);
  const breakPoints = [
    { width: 100, itemsToShow: 1 },
    { width: 200, itemsToShow: 2 },
    { width: 400, itemsToShow: 3 },
    { width: 600, itemsToShow: 4 },
    { width: 800, itemsToShow: 5 }
  ];
  const getNews = async (id) => {
    console.warn(id);
    const fetchNews = await axios.get(
      "https://HilariousSilkyDivisor.mantoshkichni.repl.co/category",
      {
        params: {
          foo: id
        }
      }
    );
    console.log(fetchNews);
    setCategoryNews(fetchNews);
    setshowsourceNews(false);
    if (showcategoryNews === false) {
      setshowcategoryNews(!showcategoryNews);
    }
  };
  return (
    <div className="container category">
      <h1 className="h1">Category</h1>
      <Carousel breakPoints={breakPoints}>
        {categories.map((item) => {
          return <Card item={item} getNews={getNews} />;
        })}
      </Carousel>
    </div>
  );
};

export default Category;
