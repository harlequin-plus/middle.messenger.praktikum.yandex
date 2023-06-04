import Handlebars from "handlebars";
import tpl from "bundle-text:./search-input.hbs";
import "./search-input.scss";

import assets from "../../helpers/assets";
const { searchIcon } = assets;

export default (placeholder, isIcon) => {
  return Handlebars.compile(tpl)({ placeholder, isIcon, searchIcon });
};
