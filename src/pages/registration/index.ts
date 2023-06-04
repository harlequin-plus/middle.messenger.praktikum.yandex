import Handlebars from "handlebars";
import tpl from "bundle-text:./registration.hbs";

import textButton from "../../components/text-button";
import actionButton from "../../components/action-button";
import formInput from "../../components/form-input";

import assets from "../../helpers/assets";
const {iconClose} = assets;

export default () => {
  const html = Handlebars.compile(tpl);

  return html({
    authButton: textButton('auth_button','submit','Создать аккаунт', 'text-button__dark'),
    closeButton: actionButton('close_button', 'button', 'Закрыть окно', iconClose),
    firstNameInput: formInput('first_name', 'text', 'Имя', 'Вы не ввели Имя'),
    secondNameInput: formInput('second_name', 'text', 'Фамилия', 'Вы не ввели фамилию'),
    loginInput: formInput('login', 'text', 'Логин', 'Не правильный логин'),
    emailInput: formInput('email', 'email', 'Почта', 'Не допустимый почтовый адрес'),
    passwordInput: formInput('password', 'password', 'Пароль', 'Пароли не совпадают'),
    confirmPasswordInput: formInput('password', 'confirmPassword', 'Повторите пароль', 'Пароли не совпадают'),
    phoneInput: formInput('phone', 'tel', 'Телефон', 'Не правильный формат телефона'),
  });
}
