import Handlebars from "handlebars";
import tpl from 'bundle-text:./chat.hbs';
import './chat.scss';

import sidebar from "../../components/sidebar";
import chatList from "../../components/chatList";
import searchInput from "../../components/search-input";
import actionButton from "../../components/action-button";

import assets from '../../helpers/assets.js';
const {iconAssets, iconSend, iconAdd, iconChatInfo, photo, balloon} = assets;

export default (isChatSelected) => {
  const html = Handlebars.compile(tpl);

  return html({
    isChatSelected: isChatSelected,
    sidebar: sidebar,
    chatList: chatList(isChatSelected),
    searchInput: searchInput('Поиск', true),
    addUserButton: actionButton('add_user', 'button', 'Добавить пользователя', iconAdd),
    addAssetButton: actionButton('add_asset', 'button', 'Добавить файл или фото', iconAssets),
    sendMessageButton: actionButton('send_message', 'submit', 'Отправить сообщение', iconSend),
    chatInfoButton: actionButton('send_message', 'submit', 'Настройка диалога', iconChatInfo),
    photo: photo,
    balloon: balloon,
  });
}
