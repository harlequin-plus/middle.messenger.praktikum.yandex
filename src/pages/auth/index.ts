import Handlebars from "handlebars";
import tpl from "bundle-text:./auth.hbs";

import textButton from "../../components/text-button";
import actionButton from "../../components/action-button";
import formInput from "../../components/form-input";

import assets from "../../helpers/assets";
const {iconClose} = assets;

export default () => {
  const html = Handlebars.compile(tpl);

  return html({
    authButton: textButton('auth_button','submit','Войти', 'text-button__dark'),
    closeButton: actionButton('close_button', 'button', 'Закрыть окно', iconClose),
    loginInput: formInput('login', 'text', 'Логин', 'Не правильный логин', '', false),
    passwordInput: formInput('password', 'password', 'Пароль', 'Не правильный пароль', '', true),
  });
}
