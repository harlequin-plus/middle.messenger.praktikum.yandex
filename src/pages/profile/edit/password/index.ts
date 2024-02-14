/* eslint-disable import/prefer-default-export */
import tpl from './password.hbs';
import Block from '../../../../app/Block';
import SidebarBlock from "../../../../components/sidebar";
import FormInput from '../../../../components/form-input';
import TextButton from '../../../../components/text-button';

import handleSubmit from '../../../../helpers/formSubmit';
import { userPasswordUpdate } from '../../../../requests/auth';
import { Routes } from '../../../../app/Constants';
import { Router } from '../../../../app/Router';
import { userService } from '../../../../services/UserService';
import { IUserChangePassword } from '../../../../type';


const router = new Router('#app');
export class ProfileEditPasswordPage extends Block {
  init() {
    this.children.sidebar = new SidebarBlock();
    this.children.oldPasswordInput = new FormInput({
      name: 'oldPassword',
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
    this.children.newPasswordInput = new FormInput({
      name: 'newPassword',
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
      name: 'newPassword',
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
      title: 'Сохранить!',
      cssClass: 'text-button__dark',
      events: {
        click: () => this.changePassword(),
      },
    });
  }

  changePassword() {
    const data  = handleSubmit(this.children);
    userService.updatePassword(data as IUserChangePassword);
  }

  render() {
    return this.compile(tpl, {
    });
  }
}
