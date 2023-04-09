import Handlebars from "handlebars";
import tpl from "bundle-text:./edit.hbs";

import sidebar from "../../../components/sidebar";
import formInput from "../../../components/form-input";
import textButton from "../../../components/text-button";

import emptyImg from "/static/assets/icons/empty_img.svg";

export default () => {
  const html = Handlebars.compile(tpl);
  
  return html({
    sidebar,
    emptyImg,
    saveButton: textButton('save_profile', 'submit', 'Сохранить', 'text-button__dark'),
    firstNameInput: formInput('first_name', 'text', 'Имя', 'Текст ошибки', 'Сергей'),
    secondNameInput: formInput('second_name', 'text', 'Фамилия', 'Текст ошибки', 'Ембулаев'),
    displayNameInput: formInput('display_name', 'text', 'Имя в чате', 'Текст ошибки', 'Sergey'),
    loginInput: formInput('login', 'text', 'Логин', 'Текст ошибки', 'embualaev'),
    emailInput: formInput('email', 'email', 'Почта', 'Текст ошибки', 'embulaev@gmail.com'),
    phoneInput: formInput('phone', 'tel', 'Телефон', 'Текст ошибки', '+7 (999) 333-22-11'),
  })
}