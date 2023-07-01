import Block from '../../app/Block';
import tpl from './action-button.hbs'
import './action-button.scss';

interface ActionButtonProps {
  id: string,
  type: string,
  title: string,
  iconSrc: string,
  events?: {
    click?: () => void;
  };
}
class ActionButton extends Block {
  constructor(props: ActionButtonProps) {
    super("div", props);
  }

  render() {
    return this.compile(tpl, { ...this.props });
  }
}

export default ActionButton;

/* 
import Handlebars from "handlebars";
import tpl from "bundle-text:./action-button.hbs";
import "./action-button.scss";

export default (id, type, title, iconSrc) => {
  return Handlebars.compile(tpl)({ id, type, title, iconSrc });
};
*/
