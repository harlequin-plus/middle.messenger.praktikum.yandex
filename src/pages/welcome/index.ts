import tpl from './welcome.hbs';
import './welcome.scss';
import Block from '../../app/Block';
import TextButton from '../../components/text-button';
import assets from '../../helpers/assets';
const { balloon } = assets;


export class WelcomePage extends Block {
  
  init() {
    this.children.authButton = new TextButton({
      id: 'enter_button',
      type: 'button',
      title: 'Войти!!',
      cssClass: 'text-button__red',
      events: {
        click: () => alert('Нажали кнопку Войти')
      },
    });
    this.children.regButton = new TextButton({
      id: 'reg_button',
      type: 'button',
      title: 'Создать аккаунт',
      cssClass: 'text-button text-button__transparent',
      events: {
        click: () => alert('Нажали кнопку Создать аккаунт')
      },
    });
    this.children.backButton = new TextButton({
      id: 'back_button',
      type: 'button',
      title: 'Вернуться на главную',
      cssClass: 'text-button text-button__transparent',
      events: {
        click: () => alert('Вернуться на главную')
      },
    });
  }

  render() {
    return this.compile(tpl, {
      balloon,
      ...this.props,
    })
  }
}
