import Block from '../../app/Block';
import tpl from './sidebar.hbs';
import "./sidebar.scss";
import assets from '../../helpers/assets';

const { logoImg, settingsIcon } = assets;

class SidebarBlock extends Block {
  constructor() {
    super('div');
  }

  render() {
    return this.compile(tpl, {
      logoImg,
      settingsIcon,
    });
  }
}

export default SidebarBlock;
