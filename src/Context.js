import { createContext, useState } from "react";
import { sources, categories } from "./api";

export const ApiContext = createContext();

const Context = ({ children }) => {
  const [sourceNews, setSourceNews] = useState();
  const [categoryNews, setCategoryNews] = useState();
  const [showsourceNews, setshowsourceNews] = useState(false);
  const [showcategoryNews, setshowcategoryNews] = useState(false);
  return (
    <ApiContext.Provider
      value={{
        sources,
        categories,
        sourceNews,
        setSourceNews,
        categoryNews,
        setCategoryNews,
        showsourceNews,
        setshowsourceNews,
        showcategoryNews,
        setshowcategoryNews
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default Context;
