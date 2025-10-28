import { Header } from "./Elements/Header";
import { Footer } from "./Elements/Footer";
import { Main } from "./Elements/Main";
import { ElementTypes } from "./Elements/ElementTypes";
import { Toc } from "./Elements/Toc";
import { Content } from "./Elements/Content";
import { Inner } from "./Elements/Inner";
import { Headline } from "./Elements/Headline";
import { Articles } from "./Elements/Articles";
import { log } from "../services/log";
import { License } from "./Elements/License";
import { Copyright } from "./Elements/Copyright";
import { Vendor } from "./Elements/Vendor";

export const getComponent = ({ name }) => {
  switch (name) {
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
    case ElementTypes.license:
      return License;
    case ElementTypes.copyright:
      return Copyright;
    case ElementTypes.vendor:
      return Vendor;
    default: {
      log.warn(`No "${name}" component found!`);
      return () => null;
    }
  }
};
