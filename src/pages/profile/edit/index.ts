/* eslint-disable import/prefer-default-export */
import tpl from './edit.hbs';
import Block from '../../../app/Block';
import SidebarBlock from "../../../components/sidebar";
import FormInput from '../../../components/form-input';
import TextButton from '../../../components/text-button';
import assets from '../../../helpers/assets';

import handleSubmit from '../../../helpers/formSubmit';

const { emptyImg } = assets;

export class ProfileEditPage extends Block {
  init() {
    this.children.sidebar = new SidebarBlock();
    this.children.firstNameInput = new FormInput({
      name: 'first_name',
      type: 'text',
      title: 'Имя',
      errorText: 'Ошибка: Вы не ввели Имя.',
      showError: false,
      value: 'Сергей',
      events: {
        change: () => {},
      },
    });
    this.children.secondNameInput = new FormInput({
      name: 'second_name',
      type: 'text',
      title: 'Фамилия',
      errorText: 'Ошибка: Вы не ввели Фамилию.',
      showError: false,
      value: 'Ембулаев',
      events: {
        change: () => {},
      },
    });
    this.children.displayNameInput = new FormInput({
      name: 'display_name',
      type: 'text',
      title: 'Имя в чате',
      errorText: 'Ошибка: Вы не ввели Имя в чате.',
      showError: false,
      value: 'Sergey',
      events: {
        change: () => {},
      },
    });
    this.children.emailInput = new FormInput({
      name: 'email',
      type: 'email',
      title: 'Почта',
      errorText: 'Ошибка: Не допустимый почтовый адрес.',
      showError: false,
      value: 'embulaev@gmail.com',
      events: {
        change: () => {},
      },
    });
    this.children.phoneInput = new FormInput({
      name: 'phone',
      type: 'Почта',
      title: 'Телефон',
      errorText: 'Ошибка: Не правильный формат телефона.',
      showError: false,
      value: '+79993332211',
      events: {
        change: () => {},
      },
    });
    this.children.loginInput = new FormInput({
      name: 'login',
      type: 'text',
      title: 'Логин',
      errorText: `Ошибка: Логин должен быть от 3 до 20 символов, латиница, 
        может содержать цифры, но не состоять из них, без пробелов, 
        без спецсимволов (допустимы дефис и нижнее подчёркивание.`,
      showError: false,
      value: 'embulaev',
      events: {
        change: () => {},
      },
    });

    this.children.saveButton = new TextButton({
      id: 'enter_button',
      type: 'submit',
      title: 'Сохранить',
      cssClass: 'text-button__dark',
      events: {
        click: () => handleSubmit(this.children),
      },
    });
  }

  render() {
    return this.compile(tpl, {
      emptyImg,
    });
  }
}

/*
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
*/