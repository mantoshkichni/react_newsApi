import { useContext, useEffect, useState } from "react";
import NewsCarousel from "./NewsCarousel";
import "./styles.scss";
import axios from "axios";
import Sources from "./Sources";
import Category from "./Category";
import { ApiContext } from "./Context";
import { SourceNewsGrid } from "./SourceNewsGrid";
import { CategoryNewsGrid } from "./CategoryNewsGrid";

export default function App() {
  const [generalNewsCarosel, setgeneralNewsCarosel] = useState([]);
  const {
    sourceNews,
    showsourceNews,
    categoryNews,
    showcategoryNews
  } = useContext(ApiContext);

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await axios.get(
          "https://HilariousSilkyDivisor.mantoshkichni.repl.co/abc"
        );
        console.warn(data.data.articles);
        setgeneralNewsCarosel(data.data.articles);
      } catch (error) {
        console.warn(error.message);
      }
    };
    getdata();
  }, []);
  return (
    <div className="App">
      <NewsCarousel generalNewsCarosel={generalNewsCarosel} />
      <Sources />
      <Category />
      {showsourceNews && <SourceNewsGrid />}
      {showcategoryNews && <CategoryNewsGrid />}
    </div>
  );
}
