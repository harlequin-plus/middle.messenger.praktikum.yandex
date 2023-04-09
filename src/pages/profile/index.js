import Handlebars from "handlebars";
import tpl from "bundle-text:./profile.hbs";
import "./profile.scss";

import sidebar from "../../components/sidebar";

import emptyImg from "/static/assets/icons/empty_img.svg";

export default () => {
  const html = Handlebars.compile(tpl);
  
  return html({
    sidebar,
    emptyImg,
  })
}