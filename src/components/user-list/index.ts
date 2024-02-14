import tpl from './user-list.hbs';
import Block from '../../app/Block';
import "./user-list.scss";
import { StoreEvents } from '../../app/Store';
import { chatService } from '../../services/ChatService';

class UserListBlock extends Block {

  constructor() {
    super('div', {
      events: {
        click: (e) => {this.adduserToChat(e)}
      }
    });
  }
  init() {
    window.store.on(StoreEvents.Updated, () => {
      this.setProps({
        searchUsers: window.store.getState().searchUsers,
      });
    });
  }

  async adduserToChat(e) {  
    const userId = e.target.closest('.adduser-js').dataset.userId;
    const chatId = window.store.getState().currentChat;
    chatService.addUsersToChat({users: [userId], chatId: chatId})
  }

  render() {
    return this.compile(tpl, {
      searchUsers: window.store.getState().searchUsers,
      isFindUsers: window.store.getState().searchUsers.length
    });
    
  }
}

export default UserListBlock;
