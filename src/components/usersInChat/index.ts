import tpl from './usersInChat.hbs';
import Block from '../../app/Block';
import "./usersInChat.scss";
import { StoreEvents } from '../../app/Store';
import { chatService } from '../../services/ChatService';

class UsersInChatBlock extends Block {

  constructor() {
    super('div', {
      events: {
        click: (e) => {this.onclick(e)}
      }
    });
  }
  init() {
    window.store.on(StoreEvents.Updated, () => {
      this.setProps({
        usersByChat: window.store.getState().usersByChat,
        countUsersByChat: window.store.getState().countUsersByChat,
      });
    });
    this.props.isShow = false;
  }


  async onclick(e) {  
    const showButton = e.target.closest('.show-list-js');
    if (showButton) {
      if (showButton.dataset.show == 'false') {
        this.setProps({isShow: true});
      } else {
        this.setProps({isShow: false});
      }
    } 
    
    const usersItem = e.target.closest('.users-in-chat__item');
    if (usersItem) {
      const userId = usersItem.dataset.userId;
      if (userId) {
        const currentChat = window.store.getState().currentChat;
        chatService.removeUsersFromChat({users: [userId], chatId: currentChat})
      }
    }
  }

  render() {
    return this.compile(tpl, {
      ...this.props,
      usersByChat: window.store.getState().usersByChat,
      countUsersByChat: window.store.getState().countUsersByChat,
    });
    
  }
}

export default UsersInChatBlock;
