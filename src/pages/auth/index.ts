/* eslint-disable import/prefer-default-export */
import tpl from './auth.hbs';
import Block from '../../app/Block';
import TextButton from '../../components/text-button';
import FormInput from '../../components/form-input';
import NavLink from '../../components/nav-link';
import assets from '../../helpers/assets';

import handleSubmit from '../../helpers/formSubmit';
import { signInData } from '../../type';
import { router } from '../../app/Router';
import { Routes } from '../../app/Constants';
import { authService } from '../../services/AuthService';

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
        click: () => this.authUser(),
      },
    });
    
    this.children.navLink = new NavLink({
      anchor: 'Создать аккаунт',
      href: Routes.registration,
      events: {
        click: () => router.go(Routes.registration),
      },
    });
  }
  
  authUser() {
    const data  = handleSubmit(this.children);
    authService.signIn(data as signInData);
  }

  /*
  async authUser() {

    const data = await handleSubmit(this.children);
    if (data?.success) {
      console.log(data)
      userAuthorization(data)
						.then(() => {
							
              getUser().then(res => {
                if (res.status) {
                  window.store.set({user: res.response});
                  router.go(Routes.messenger);
                  console.log(window.store);
                  alert(res.response.first_name)
                }

              });
						})
						.catch(res => {
							if (res.reason === 'Login or password is incorrect') {
								res.reason = 'Неверный логин или пароль';
							}
							alert([res.reason]);
							
						});
    }
  }
  */

  render() {
    return this.compile(tpl, {
      iconClose,
    });
  }
}
