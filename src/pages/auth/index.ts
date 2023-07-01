/* eslint-disable import/prefer-default-export */
import tpl from './auth.hbs';
import Block from '../../app/Block';
import TextButton from '../../components/text-button';
import FormInput from '../../components/form-input';
import assets from '../../helpers/assets';

import handleSubmit from '../../helpers/formSubmit';

const { iconClose } = assets;

export class AuthPage extends Block {
  init() {
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

    this.children.authButton = new TextButton({
      id: 'enter_button',
      type: 'submit',
      title: 'Войти',
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
