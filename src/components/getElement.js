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
import { Comment } from "./Elements/Comment";
import { HeadlineWithMeta } from "./Elements/HeadlineWithMeta";
import { TocLink } from "./Elements/TocLink";
import { Text } from "./Elements/Text";
import { Meta } from "./Elements/Meta";
import { Icon } from "./Elements/Icon";
import { Links } from "./Elements/Links";
import { Introduction } from "./Elements/Introduction";
import { IssueDate } from "./Elements/IssueDate";
import { GoogleTranslate } from "./Elements/GoogleTranslate";
import { RequestModule } from "./Elements/RequestModule";
import { Pdf } from "./Elements/PDF";
import { Html } from "./Elements/HTML";
import { Label } from "./Elements/Label";

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
    case ElementTypes.headlineWithMeta:
      return HeadlineWithMeta;
    case ElementTypes.comment:
      return Comment;
    case ElementTypes.tocLink:
      return TocLink;
    case ElementTypes.meta:
      return Meta;
    case ElementTypes.icon:
      return Icon;
    case ElementTypes.text:
      return Text;
    case ElementTypes.links:
      return Links;
    case ElementTypes.introduction:
      return Introduction;
    case ElementTypes.issueDate:
      return IssueDate;
    case ElementTypes.googleTranslate:
      return GoogleTranslate;
    case ElementTypes.requestModule:
      return RequestModule;
    case ElementTypes.pdf:
      return Pdf;
    case ElementTypes.html:
      return Html;
    case ElementTypes.label:
      return Label;
    default: {
      log.warn(`No "${name}" component found!`);
      return () => null;
    }
  }
};
