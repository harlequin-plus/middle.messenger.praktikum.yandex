/* eslint-disable import/prefer-default-export */
import tpl from './profile.hbs';
import Block from '../../app/Block';
import SidebarBlock from "../../components/sidebar";
import assets from '../../helpers/assets';
import "./profile.scss";

const { emptyImg } = assets;

import { Router } from '../../app/Router';
import { Routes, resourcesUrl } from '../../app/Constants';
import ProfileButton from '../../components/profile-button';
import { authService } from '../../services/AuthService';
import { StoreEvents } from '../../app/Store.ts';

const router = new Router('#app');

export class ProfilePage extends Block {
  init() {
    
    this.children.sidebar = new SidebarBlock();
    this.children.changeProfileButton = new ProfileButton({
      title: 'Изменить данные',
      cssClass: '',
      events: {
        click: () => router.go(Routes.settingsEdit),
      },
    });
    this.children.changePasswordButton = new ProfileButton({
      title: 'Изменить пароль',
      cssClass: '',
      events: {
        click: () => router.go(Routes.settingsEditPassword),
      },
    });
    this.children.logoutButton = new ProfileButton({
      title: 'Выйти из профиля',
      cssClass: 'profile__link_red',
      events: {
        click: () => this.logoutUser(),
      },
    });

    window.store.on(StoreEvents.Updated, () => {
      this.setProps({
        user: window.store.getState().user,
      });
    });
    this.props.user =  window.store.getState().user;

  }

  logoutUser() {
    authService.logout();
  }

  render() {
    console.log(this.props)
    return this.compile(tpl, {
      ...this.props,
      avatar: window.store.getState().user?.avatar 
        ? resourcesUrl + window.store.getState().user?.avatar 
        : emptyImg,
    });
  }
}
