import { ArticleElementType } from "./ArticleElementType";
import { Inner } from "./Inner";

export const getArticleElement = (type) => {
  switch (type) {
    case ArticleElementType.inner:
      return Inner;
    default: {
      return () => null;
    }
  }
};
