import Handlebars from "handlebars";
import tpl from "bundle-text:./welcome.hbs";
import "./welcome.scss";

import textButton from '../../components/text-button'

import assets from "../../helpers/assets";
const {balloon} = assets;

export default (page) => {
  const html = Handlebars.compile(tpl);

  return html({
    page: page,
    balloon:balloon,
    authButton: textButton('enter_button', 'button', 'Войти', 'text-button__red'),
    regButton: textButton('reg_button', 'button', 'Создать аккаунт', 'text-button text-button__transparent'),
    backButton: textButton('back_button', 'button', 'Вернуться на главную', 'text-button text-button__transparent'),
  });
}
  
