/* eslint-disable import/prefer-default-export */
import tpl from './profile.hbs';
import Block from '../../app/Block';
import SidebarBlock from "../../components/sidebar";
import assets from '../../helpers/assets';
import "./profile.scss";

const { emptyImg } = assets;

export class ProfilePage extends Block {
  init() {
    this.children.sidebar = new SidebarBlock();
  }

  render() {
    return this.compile(tpl, {
      emptyImg,
    });
  }
}
