import { WelcomePage } from './pages/welcome';
import { AuthPage } from './pages/auth';
import { RegistrationPage } from './pages/registration';
import { ProfilePage } from './pages/profile';
import { ProfileEditPage } from './pages/profile/edit';
import { ProfileEditPasswordPage } from './pages/profile/edit/password';
import { ChatPage } from './pages/chat';

import './style.scss';

window.addEventListener("DOMContentLoaded", () => {
  let app: HTMLElement | null = document.getElementById('app');
  rednerApp(app);
});

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

/* Псевдонавигация по страницам */
const links = document.querySelectorAll('a');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    history.pushState(null, '', href);
    let app: HTMLElement | null = document.getElementById('app');
    if (app) {
      app.innerHTML = '';
      rednerApp(app);
    }
  });
});

