
import chatConstructor from './pages/chat';
import authFormConstructor from './pages/auth';
import registrationFormConstructor from './pages/registration';
import welcomeConstructor from './pages/welcome';
import profileConstructor from './pages/profile';
import profileEditConstructor from './pages/profile/edit';
import profilePasswordEditConstructor from './pages/profile/edit/password';

import './style.scss';

let app = document.getElementById('app');

rednerApp();

function rednerApp() {
  const currentUrl = window.location.pathname;

  switch (currentUrl) {
    case '/':
      app.innerHTML = welcomeConstructor('index');
      break;
    case '/auth/':
      app.innerHTML = authFormConstructor();
      break;
    case '/registration/':
      app.innerHTML = registrationFormConstructor();
      break;
    case '/chat/':
      app.innerHTML = chatConstructor(true);
      break;
    case '/chat/empty/':
      app.innerHTML = chatConstructor();
      break;
    case '/profile/':
      app.innerHTML = profileConstructor();
      break;
    case '/profile/edit/':
      app.innerHTML = profileEditConstructor();
      break;
    case '/profile/edit/password/':
      app.innerHTML = profilePasswordEditConstructor();
      break;
    case '/404/':
      app.innerHTML = welcomeConstructor('404');
      break;
    case '/500/':
      app.innerHTML = welcomeConstructor('500');
      break;
  
    default:
      app.innerHTML = welcomeConstructor('404');
      break;
  }
}

/* Псевдонавигация по страницам */
const links = document.querySelectorAll('a');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    history.pushState(null, null, href);
    rednerApp();
  });
});

