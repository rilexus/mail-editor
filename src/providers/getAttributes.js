export const getAttributes = (node) => {
  const attributeKeys = [
    "template",
    "type",
    "value",
    "wrapInSpan",
    "anchor",
    "toc",
    "class",
    "messageKey",
    "classKey",
    "dataIndex",
    "recordFieldClass",
    "abstractClass",
    "articleClass",
    "link",
    "wrap",
    "separator",
    "fields",
  ];

  return Object.entries(node).reduce((acc, [key, value]) => {
    if (attributeKeys.includes(key)) {
      return {
        ...acc,
        [key]: value,
      };
    }
    return acc;
  }, {});
};
