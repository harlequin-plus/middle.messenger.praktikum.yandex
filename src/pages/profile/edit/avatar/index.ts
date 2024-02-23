/* eslint-disable import/prefer-default-export */
import tpl from './avatar.hbs';
import Block from '../../../../app/Block';
import SidebarBlock from "../../../../components/sidebar";
import FileInput from '../../../../components/file-input';
import TextButton from '../../../../components/text-button';

import { userService } from '../../../../services/UserService';


export class ProfileEditAvatarPage extends Block {
  init() {
    this.children.sidebar = new SidebarBlock();
    this.children.fileInput = new FileInput({
      name: 'avatar',
      type: 'file',
    });
    this.children.saveButton = new TextButton({
      id: 'enter_button',
      type: 'submit',
      title: 'Загрузить',
      cssClass: 'text-button__dark',
      events: {
        click: () => this.updateAvatar(),
      },
    });
  }
  updateAvatar() {
    const formData = new FormData();
    const avatar = document.getElementById("avatar") as HTMLInputElement | null;
    formData.append("avatar", avatar!.files![0]);
    userService.updateAvatar(formData);
  }

  render() {
    return this.compile(tpl, {
    });
  }
}
