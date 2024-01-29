import tpl from './chatList.hbs';
import Block from '../../app/Block';
import assets from '../../helpers/assets';
import "./chatList.scss";
import { messages } from "../../mocks.json";


const { avatar } = assets;

class ChatListBlock extends Block {
  constructor() {
    super('div');
  }

  render() {
    return this.compile(tpl, {
      isChatSelected: true,
      messages,
      avatar,
    });
  }
}

export default ChatListBlock;
