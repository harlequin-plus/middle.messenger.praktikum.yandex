/* eslint-disable import/prefer-default-export */
import tpl from './password.hbs';
import Block from '../../../../app/Block';
import SidebarBlock from "../../../../components/sidebar";
import FormInput from '../../../../components/form-input';
import TextButton from '../../../../components/text-button';
import assets from '../../../../helpers/assets';

import handleSubmit from '../../../../helpers/formSubmit';

const { emptyImg } = assets;

export class ProfileEditPasswordPage extends Block {
  init() {
    this.children.sidebar = new SidebarBlock();
    this.children.oldPasswordInput = new FormInput({
      name: 'password',
      type: 'password',
      title: 'Старый пароль',
      errorText: `Ошибка: Пароль должен быть от 8 до 40 символов, 
        обязательно хотя бы одна заглавная буква и цифра.`,
      showError: false,
      value: '',
      events: {
        change: () => {
        },
      },
    });
    this.children.newPasswordInput = new FormInput({
      name: 'password',
      type: 'password',
      title: 'Новый пароль',
      errorText: `Ошибка: Пароль должен быть от 8 до 40 символов, 
        обязательно хотя бы одна заглавная буква и цифра.`,
      showError: false,
      value: '',
      events: {
        change: () => {
        },
      },
    });
    this.children.confirmNewPasswordInput = new FormInput({
      name: 'password',
      type: 'password',
      title: 'Повторите новый пароль',
      errorText: `Ошибка: Пароль должен быть от 8 до 40 символов, 
        обязательно хотя бы одна заглавная буква и цифра.`,
      showError: false,
      value: '',
      events: {
        change: () => {
        },
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
