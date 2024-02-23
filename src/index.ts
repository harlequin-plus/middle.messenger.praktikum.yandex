import { AuthPage } from './pages/auth';
import { RegistrationPage } from './pages/registration';
import { ProfilePage } from './pages/profile';
import { ProfileEditPage } from './pages/profile/edit';
import { ProfileEditPasswordPage } from './pages/profile/edit/password';
import { ProfileEditAvatarPage } from './pages/profile/edit/avatar';
import { ChatPage } from './pages/chat';

import { Routes } from './app/Constants.ts';
import { router } from './app/Router.ts';


import './style.scss';


import { Store } from './app/Store.ts';
import { AppState } from './type';
import { authService } from './services/AuthService';
import { chatService } from './services/ChatService.ts';

declare global {
  interface Window {
    store: Store<AppState>;
  }

  type Nullable<T> = T | null;

}

const initState: AppState = {
  error: null,
  user: null,
  isOpenDialogChat: false,
  chats: [],
  messages: [],
  searchUsers: [],
  currentChat: 0,
  usersByChat: [],
  countUsersByChat: 0,
}
// сохраняем начальное состояние

window.store = new Store(<AppState>(initState));
console.log(window.store)

const initApp = async () => {
  
  const user = await authService.getUser();
  
  if (user) {
    const chats = await chatService.getChats();
  } else {
    router.go(Routes.auth);
  }

  router
  .use(Routes.auth, AuthPage)
  .use(Routes.registration, RegistrationPage)
  .use(Routes.messenger, ChatPage)
  .use(Routes.settings, ProfilePage)
  .use(Routes.settingsEdit, ProfileEditPage)
  .use(Routes.settingsEditPassword, ProfileEditPasswordPage)
  .use(Routes.settingsEditAvatar, ProfileEditAvatarPage)

  router.start();
  


}
window.addEventListener('DOMContentLoaded', () => {
  initApp()
});



/*

function rednerApp(app: HTMLElement | null) {
  const currentUrl: string = window.location.pathname;

  switch (currentUrl) {
    case '/':
      const WelcomePageConstructor = new WelcomePage(true, false, false);
      app?.append(WelcomePageConstructor.getContent()!);
      break;
    case '/auth/':
      const AuthPageConstructor = new AuthPage();
      app?.append(AuthPageConstructor.getContent()!);
      break;
    case '/registration/':
      const RegistrationPageConstructor = new RegistrationPage();
      app?.append(RegistrationPageConstructor.getContent()!);
      break;
    case '/chat/':
      const ChatPageConstructor = new ChatPage(true);
      app?.append(ChatPageConstructor.getContent()!);
      break;
    case '/chat/empty/':
      const EmptyChatPageConstructor = new ChatPage(false);
      app?.append(EmptyChatPageConstructor.getContent()!);
      break;
    case '/profile/':
      const ProfilePageConstructor = new ProfilePage();
      app?.append(ProfilePageConstructor.getContent()!);
      break;
    case '/profile/edit/':
      const ProfileEditPageConstructor = new ProfileEditPage();
      app?.append(ProfileEditPageConstructor.getContent()!);
      break;
    case '/profile/edit/password/':
      const ProfileEditPasswordPageConstructor = new ProfileEditPasswordPage();
      app?.append(ProfileEditPasswordPageConstructor.getContent()!);
      break;
    case '/404/':
      const Page404Constructor = new WelcomePage(false, true, false);
      app?.append(Page404Constructor.getContent()!);
      break;
    case '/500/':
      const Page500Constructor = new WelcomePage(false, false, true);
      app?.append(Page500Constructor.getContent()!);
      break;

    default:
      const DefaultPagePageConstructor = new WelcomePage(false, true, false);
      app?.append(DefaultPagePageConstructor.getContent()!);
      break;
  }
}
*/
/* Псевдонавигация по страницам */
const links = document.querySelectorAll('a');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    router.go(href);
  });
});
