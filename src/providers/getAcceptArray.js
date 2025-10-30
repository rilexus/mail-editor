export const getAcceptArray = ({ name }) => {
  switch (name) {
    case "header":
      return ["inner"];
    case "main":
      return ["content", "toc"];
    case "footer":
      return ["copyright", "license", "vendor"];
    case "content":
      return [
        "inner",
        "tocLink",
        "headlineWithMeta",
        "content",
        "googleTranslate",
      ];
    case "toc":
      return ["inner"];
    case "html":
      return ["icon", "label"];
    case "pdf":
      return ["icon", "label"];
    case "requestModule":
      return ["icon", "label"];
    case "links":
      return ["pdf", "html", "requestModule"];
    case "articles":
      return ["inner"];
    case "inner":
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
