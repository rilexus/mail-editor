import { getArticleElement } from "./getArticleElement";

export const ArticleElements = ({ articleElements }) => {
  return (
    articleElements &&
    Object.entries(articleElements).map(([type, data]) => {
      const Elem = getArticleElement(type);
      return <Elem {...data} />;
    })
  );
};
