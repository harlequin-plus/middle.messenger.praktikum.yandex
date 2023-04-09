import Handlebars from "handlebars";
import tpl from "bundle-text:./action-button.hbs";
import "./action-button.scss";

export default (id, type, title, iconSrc) => {
  return Handlebars.compile(tpl)({ id, type, title, iconSrc });
};
