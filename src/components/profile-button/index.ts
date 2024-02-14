import Block from '../../app/Block';
import tpl from './profile-button.hbs'
import './profile-button.scss';

interface ProfileButtonProps {
  title: string,
  cssClass: string,
  events: {
    click: (e: Event) => void
  }
}
class ProfileButton extends Block {
  constructor(props: ProfileButtonProps) {
    super("div", props);
  }

  render() {
    return this.compile(tpl, { ...this.props });
  }
}

export default ProfileButton;
