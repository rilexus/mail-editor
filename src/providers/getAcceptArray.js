import { ElementTypes } from "../components/Elements/ElementTypes";

export const getAcceptArray = ({ name }) => {
  switch (name) {
    case "header":
      return ["inner"];
    case ElementTypes.main:
      return ["content", "toc"];
    case "footer":
      return ["copyright", "license", "vendor"];
    case ElementTypes.stockRatesTop:
      return [ElementTypes.inner];
    case "intro":
      return [];
    case "table":
      return ["main", "header"];
    case "disclaimer":
      return [];
    case ElementTypes.content:
      return [
        ElementTypes.inner,
        ElementTypes.tocLink,
        ElementTypes.headlineWithMeta,
        ElementTypes.content,
        ElementTypes.googleTranslate,
        ElementTypes.intro,
        ElementTypes.disclaimer,
      ];
    case ElementTypes.reportImage:
      return [];
    case ElementTypes.left:
      return [ElementTypes.reportImage];
    case ElementTypes.right:
      return [
        ElementTypes.abstract,
        ElementTypes.content,
        ElementTypes.googleTranslate,
      ];
    case ElementTypes.publishedAt:
      return [];
    case "media":
      return [];
    case "toc":
      return [ElementTypes.inner];
    case ElementTypes.html:
      return ["icon", "label"];
    case ElementTypes.pdf:
      return ["icon", "label"];
    case "requestModule":
      return ["icon", "label"];
    case "links":
      return ["pdf", "html", "requestModule"];
    case "articles":
      return ["inner"];
    case ElementTypes.inner:
      return [
        "icon",
        "content",
        "inner",
        "headline",
        "articles",
        "issueDate",
        "comment",
        "introduction",
        "links",
      ];
    default: {
      return [];
    }
  }
};
