import { useContext } from "react";
import { CardNews } from "./CardNews";
import { ApiContext } from "./Context";
import Carousel from "react-elastic-carousel";
export const SourceNewsGrid = () => {
  const breakPoints = [
    { width: 200, itemsToShow: 1 },
    { width: 450, itemsToShow: 2 },
    { width: 700, itemsToShow: 3 },
    { width: 950, itemsToShow: 4 }
  ];
  const { sourceNews } = useContext(ApiContext);
  return (
    <div className="containers">
      <Carousel breakPoints={breakPoints}>
        {sourceNews.data.articles?.map((item) => {
          return <CardNews item={item} />;
        })}
      </Carousel>
    </div>
  );
};
