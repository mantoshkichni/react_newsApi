import { sources } from "./api";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import { useContext, useEffect } from "react";
import { ApiContext } from "./Context";
import axios from "axios";

const Sources = () => {
  const {
    sourceNews,
    setSourceNews,
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
      "https://HilariousSilkyDivisor.mantoshkichni.repl.co/sources",
      {
        params: {
          foo: id
        }
      }
    );
    console.log(fetchNews);
    setSourceNews(fetchNews);
    console.log("---------------------");
    console.log(sourceNews);
    setshowcategoryNews(false);
    if (showsourceNews === false) {
      setshowsourceNews(!showsourceNews);
    }
  };
  return (
    <div className="sources container">
      <h1 className="h1">Sources</h1>
      <Carousel breakPoints={breakPoints}>
        {sources.map((item) => {
          return <Card item={item} getNews={getNews} />;
        })}
      </Carousel>
    </div>
  );
};

export default Sources;
