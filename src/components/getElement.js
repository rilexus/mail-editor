import { Header } from "./Elements/Header";
import { Footer } from "./Elements/Footer";
import { Main } from "./Elements/Main";
import { ElementTypes } from "./Elements/ElementTypes";
import { Toc } from "./Elements/Toc";
import { Content } from "./Elements/Content";
import { Inner } from "./Elements/Inner";
import { Headline } from "./Elements/Headline";
import { Articles } from "./Elements/Articles";

export const getElement = (type) => {
  switch (type) {
    case ElementTypes.header:
      return Header;
    case ElementTypes.footer:
      return Footer;
    case ElementTypes.main:
      return Main;
    case ElementTypes.toc:
      return Toc;
    case ElementTypes.content:
      return Content;
    case ElementTypes.inner:
      return Inner;
    case ElementTypes.headline:
      return Headline;
    case ElementTypes.articles:
      return Articles;

    default: {
      return () => null;
    }
  }
};
