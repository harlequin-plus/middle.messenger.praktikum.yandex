import Block from '../../app/Block';
import tpl from './text-button.hbs'
import './text-button.scss';

interface TextButtonProps {
  id: string,
  type: string,
  title: string,
  cssClass: string,
  events: {
    click: (e: Event) => void
  }
}
class TextButton extends Block {
  constructor(props: TextButtonProps) {
    super("div", props);
  }

  render() {
    return this.compile(tpl, { ...this.props });
  }
}

export default TextButton;
