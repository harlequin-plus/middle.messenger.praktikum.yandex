/* eslint-disable import/prefer-default-export */
import tpl from './edit.hbs';
import Block from '../../../app/Block';
import SidebarBlock from "../../../components/sidebar";
import FormInput from '../../../components/form-input';
import TextButton from '../../../components/text-button';
import handleSubmit from '../../../helpers/formSubmit';
import { userService } from '../../../services/UserService.ts';
import { IUserProfileData } from '../../../type';
import { StoreEvents } from '../../../app/Store.ts';


export class ProfileEditPage extends Block {
  init() {
    this.children.sidebar = new SidebarBlock();
    this.children.firstNameInput = new FormInput({
      name: 'first_name',
      type: 'text',
      title: 'Имя',
      errorText: 'Ошибка: Вы не ввели Имя.',
      showError: false,
      value: window.store.getState().user.first_name,
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
      value: window.store.getState().user.second_name,
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
      value: window.store.getState().user.display_name,
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
      value: window.store.getState().user.email,
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
      value: window.store.getState().user.phone,
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
      value: window.store.getState().user.login,
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
        click: () => this.updateProfile(),
      },
    });

    window.store.on(StoreEvents.Updated, () => {
      this.setProps({
        user: window.store.getState().user,
      });
    });
  }

  updateProfile() {
    const data  = handleSubmit(this.children);
    userService.updateProfile(data as IUserProfileData);
  }
  render() {
    return this.compile(tpl, {
      user: window.store.getState().user
    });
  }
}
