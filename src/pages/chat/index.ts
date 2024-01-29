/* eslint-disable import/prefer-default-export */
import tpl from './chat.hbs';
import Block from '../../app/Block';
import SidebarBlock from "../../components/sidebar";
import ChatListBlock from "../../components/chatList";
import SearchInput from "../../components/search-input";
import ActionButton from "../../components/action-button";
import assets from '../../helpers/assets';
import "./chat.scss";
import handleSubmit from '../../helpers/formSubmit';

const {iconAssets, iconSend, iconAdd, iconChatInfo, photo, balloon} = assets;

interface ChatPageProps {
  isChatSelected: boolean,
}
export class ChatPage extends Block {
  constructor(isChatSelected: boolean) {
    const props: ChatPageProps = {
      isChatSelected,
    };
    super('div', props);
  }

  init() {
    this.children.sidebar = new SidebarBlock();
    this.children.chatList = new ChatListBlock();
    this.children.searchInput = new SearchInput();
    this.children.addUserButton = new ActionButton({
      id: 'add_user',
      type: 'button',
      title: 'Добавить пользователя',
      iconSrc: iconAdd,
    });
    this.children.addAssetButton = new ActionButton({
      id: 'add_asset',
      type: 'button',
      title: 'Добавить файл или фото',
      iconSrc: iconAssets,
    });
    this.children.sendMessageButton = new ActionButton({
      id: 'send_message',
      type: 'submit',
      title: 'Отправить сообщение',
      iconSrc: iconSend,
      events: {
        click: () => handleSubmit(this.children),
      }
    });
    this.children.chatInfoButton = new ActionButton({
      id: 'chat_info',
      type: 'button',
      title: 'Настройка диалога',
      iconSrc: iconChatInfo,
    });
  }

  render() {
    return this.compile(tpl, {
      ...this.props,
      photo,
      balloon,
    });
  }
}
