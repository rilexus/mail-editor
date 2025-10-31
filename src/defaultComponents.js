import { getAcceptArray } from "./providers/getAcceptArray";
import { capitalize } from "./utils/capitalize";
import { ElementTypes } from "./components/Elements/ElementTypes";

const buildDefaultElement = ({ name, ...rest }) => {
  return {
    name,
    id: name,
    label: capitalize(name),
    icon: "",
    accept: getAcceptArray({ name: name }),
    path: "",
    attributes: {},
    children: [],
    ...rest,
  };
};

export const defaultComponents = Object.values(ElementTypes)
  .map((name) => {
    return buildDefaultElement({ name });
  })
  .toSorted((a, b) => ("" + a.name).localeCompare(b.name));

// export const defaultComponents = [
//   buildDefaultElement({ name: "publishedAt" }),
//   buildDefaultElement({ name: "media" }),
//   buildDefaultElement({ name: "disclaimer" }),
//   buildDefaultElement({ name: "stockRatesTop" }),
//   buildDefaultElement({ name: "intro" }),
//   buildDefaultElement({ name: "table" }),
//   buildDefaultElement({ name: "header" }),
//   buildDefaultElement({ name: "comment" }),
//   buildDefaultElement({ name: "googleTranslate" }),
//   buildDefaultElement({ name: "html" }),
//   buildDefaultElement({ name: "icon" }),
//   buildDefaultElement({ name: "introduction" }),
//   buildDefaultElement({ name: "label" }),
//   buildDefaultElement({ name: "links" }),
//   buildDefaultElement({ name: "meta" }),
//   buildDefaultElement({ name: "requestModule" }),
//   buildDefaultElement({ name: "text" }),
//   buildDefaultElement({ name: "tocLink" }),
//   buildDefaultElement({ name: "headlineWithMeta" }),
//   buildDefaultElement({ name: "headline" }),
//   buildDefaultElement({ name: "copyright" }),
//   buildDefaultElement({ name: "license" }),
//   buildDefaultElement({ name: "vendor" }),
//   buildDefaultElement({ name: "footer" }),
//   buildDefaultElement({ name: "main" }),
//   buildDefaultElement({ name: "toc" }),
//   buildDefaultElement({ name: "content" }),
//   buildDefaultElement({ name: "inner" }),
//   buildDefaultElement({ name: "articles" }),
// ].toSorted((a, b) => ("" + a.name).localeCompare(b.name));
