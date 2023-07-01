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

/*
import Handlebars from "handlebars";
import tpl from "bundle-text:./chatList.hbs";
import "./chatList.scss";

import { messages } from "../../mocks.json";

import assets from "../../helpers/assets";
const { avatar } = assets;

Handlebars.registerHelper("eq", function (a, b) {
  return a === b;
});
Handlebars.registerHelper("and", function (a, b) {
  return a && b;
});

export default (isChatSelected) => {
  const html = Handlebars.compile(tpl);

  return html({
    isChatSelected: isChatSelected,
    messages: messages,
    avatar: avatar,
  });
};
*/
