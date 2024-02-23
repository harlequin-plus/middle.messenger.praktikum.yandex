/* eslint-disable import/prefer-default-export */
import tpl from './registration.hbs';
import Block from '../../app/Block';
import TextButton from '../../components/text-button';
import FormInput from '../../components/form-input';
import assets from '../../helpers/assets';

import handleSubmit from '../../helpers/formSubmit';
import { userRegistration, getUser } from '../../requests/auth';
import { Router } from '../../app/Router';
import { Routes } from '../../app/Constants.ts';
import NavLink from '../../components/nav-link/index.ts';
import { authService } from '../../services/AuthService.ts';
import { signUpData } from '../../type.ts';

const { iconClose } = assets;

const router = new Router('#app');

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
        click: () => this.regUser(),
      },
    });
    
    
    this.children.navLink = new NavLink({
      anchor: 'Войти',
      href: Routes.auth,
      events: {
        click: () => router.go(Routes.auth),
      },
    });
  }

  regUser() {
    const data  = handleSubmit(this.children);
    authService.signUp(data as signUpData);
  }
 
  render() {
    return this.compile(tpl, {
      iconClose,
    });
  }
}
