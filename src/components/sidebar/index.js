import Handlebars from "handlebars";
import tpl from "bundle-text:./sidebar.hbs";
import "./sidebar.scss";

import assets from "../../helpers/assets";
const { logoImg, settingsIcon } = assets;

export default () => {
  const html = Handlebars.compile(tpl);

  return html({
    logoImg,
    settingsIcon,
  });
};
