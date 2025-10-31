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
import { StockRatesTop } from "./Elements/StockRatesTop";
import { Intro } from "./Elements/Intro";
import { Table } from "./Elements/Table";
import { Media } from "./Elements/Media";
import { PublishedAt } from "./Elements/PublishedAt";
import { Disclaimer } from "./Elements/Disclaimer";
import { ReportImage } from "./Elements/ReportImage";
import { Abstract } from "./Elements/Abstract";
import { Link } from "./Elements/Link";
import { Portal } from "./Elements/Portal";
import { Name } from "./Elements/Name";
import { PriceClose } from "./Elements/PriceClose";
import { ChangeRelative } from "./Elements/ChangeRelative";
import { Item } from "./Elements/Item";
import { Left } from "./Elements/Left";
import { Right } from "./Elements/Right";
import { StockRatesBottom } from "./Elements/StockRatesBottom";
import { Percent } from "./Elements/Percent";
import { CurrencySymbol } from "./Elements/CurrencySymbol";
import { SocialMedia } from "./Elements/SocialMedia";
import { Channels } from "./Elements/Channels";
import { LinkedIn } from "./Elements/LinkedIn";
import { Posts } from "./Elements/Posts";
import { Post } from "./Elements/Post";
import { User } from "./Elements/User";
import { Image } from "./Elements/Image";
import { Action } from "./Elements/Action";
import { UserWithMeta } from "./Elements/UserWithMeta";
import { Like } from "./Elements/Like";
import { UserLink } from "./Elements/UserLink";
import { UserName } from "./Elements/UserName";
import { Date } from "./Elements/Date";
import { ToPost } from "./Elements/ToPost";
import { Twitter } from "./Elements/Twitter";
import { Instagram } from "./Elements/Instagram";
import { Avatar } from "./Elements/Avatar";
import { Facebook } from "./Elements/Facebook";
import { YouTube } from "./Elements/YouTube";
import { TikTok } from "./Elements/TikTok";

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
    case ElementTypes.stockRatesTop:
      return StockRatesTop;
    case ElementTypes.intro:
      return Intro;
    case ElementTypes.table:
      return Table;
    case ElementTypes.media:
      return Media;
    case ElementTypes.publishedAt:
      return PublishedAt;
    case ElementTypes.disclaimer:
      return Disclaimer;
    case ElementTypes.reportImage:
      return ReportImage;
    case ElementTypes.abstract:
      return Abstract;
    case ElementTypes.link:
      return Link;
    case ElementTypes.portal:
      return Portal;
    case ElementTypes.name:
      return Name;
    case ElementTypes.priceClose:
      return PriceClose;
    case ElementTypes.changeRelative:
      return ChangeRelative;
    case ElementTypes.left:
      return Left;
    case ElementTypes.right:
      return Right;
    case ElementTypes.item:
      return Item;
    case ElementTypes.stockRatesBottom:
      return StockRatesBottom;
    case ElementTypes.percent:
      return Percent;
    case ElementTypes.currencySymbol:
      return CurrencySymbol;
    case ElementTypes.socialMedia:
      return SocialMedia;
    case ElementTypes.channels:
      return Channels;
    case ElementTypes.linkedIn:
      return LinkedIn;
    case ElementTypes.posts:
      return Posts;
    case ElementTypes.post:
      return Post;
    case ElementTypes.user:
      return User;
    case ElementTypes.image:
      return Image;
    case ElementTypes.action:
      return Action;
    case ElementTypes.userWithMeta:
      return UserWithMeta;
    case ElementTypes.like:
      return Like;
    case ElementTypes.userLink:
      return UserLink;
    case ElementTypes.userName:
      return UserName;
    case ElementTypes.date:
      return Date;
    case ElementTypes.toPost:
      return ToPost;
    case ElementTypes.twitter:
      return Twitter;
    case ElementTypes.instagram:
      return Instagram;
    case ElementTypes.avatar:
      return Avatar;
    case ElementTypes.facebook:
      return Facebook;
    case ElementTypes.youtube:
      return YouTube;
    case ElementTypes.tikTok:
      return TikTok;
    default: {
      log.warn(`No "${name}" component found!`);
      return (props) => {
        return (
          <div
            style={{
              background: "yellow",
            }}
          >
            {props.item.name}
          </div>
        );
      };
    }
  }
};
