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
    props: {
      style: {},
    },
    children: [],
    ...rest,
  };
};

export const defaultComponents = Object.values(ElementTypes)
  .map((name) => {
    return buildDefaultElement({ name });
  })
  .toSorted((a, b) => ("" + a.name).localeCompare(b.name));
