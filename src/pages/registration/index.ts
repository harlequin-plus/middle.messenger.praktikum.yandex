/* eslint-disable import/prefer-default-export */
import tpl from './registration.hbs';
import Block from '../../app/Block';
import TextButton from '../../components/text-button';
import FormInput from '../../components/form-input';
import assets from '../../helpers/assets';

import handleSubmit from '../../helpers/formSubmit';

const { iconClose } = assets;

export class RegistrationPage extends Block {
  init() {
    this.children.firstNameInput = new FormInput({
      name: 'first_name',
      type: 'text',
      title: 'Имя',
      errorText: 'Ошибка: Вы не ввели Имя.',
      showError: false,
      value: '',
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
      value: '',
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
      value: '',
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
      value: '',
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
      value: '',
      events: {
        change: () => {},
      },
    });
    this.children.passwordInput = new FormInput({
      name: 'password',
      type: 'password',
      title: 'Пароль',
      errorText: `Ошибка: Пароль должен быть от 8 до 40 символов, 
        обязательно хотя бы одна заглавная буква и цифра.`,
      showError: false,
      value: '',
      events: {
        change: () => {
        },
      },
    });
    this.children.confirmPasswordInput = new FormInput({
      name: 'password',
      type: 'password',
      title: 'Пароль',
      errorText: 'Ошибка: Пароли не совпадают.',
      showError: false,
      value: '',
      events: {
        change: () => {
        },
      },
    });

    this.children.authButton = new TextButton({
      id: 'enter_button',
      type: 'submit',
      title: 'Создать аккаунт',
      cssClass: 'text-button__red',
      events: {
        click: () => handleSubmit(this.children),
      },
    });
  }

  render() {
    return this.compile(tpl, {
      iconClose,
    });
  }
}



/*
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
*/
