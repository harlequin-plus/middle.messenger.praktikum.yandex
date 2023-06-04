import Handlebars from "handlebars";
import tpl from "bundle-text:./password.hbs";

import sidebar from "../../../../components/sidebar";
import formInput from "../../../../components/form-input";
import textButton from "../../../../components/text-button";

import emptyImg from "/static/assets/icons/empty_img.svg";

export default () => {
  const html = Handlebars.compile(tpl);
  
  return html({
    sidebar,
    emptyImg,
    saveButton: textButton('save_profile', 'submit', 'Сохранить', 'text-button__dark'),
    oldPasswordInput: formInput('oldPassword', 'password', 'Старый пароль', 'Текст ошибки', '123456', false),
    newPasswordInput: formInput('newPassword', 'password', 'Новый пароль', 'Текст ошибки', '987654321', false),
    confirmNewPasswordInput: formInput('second_name', 'password', 'Повторите новый пароль', 'Текст ошибки', '987654321', false),
  })
}