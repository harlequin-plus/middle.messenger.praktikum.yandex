import Block from '../../app/Block';
import tpl from './file-input.hbs';
import validate from '../../helpers/validate';

interface FormInputProps {
  name: string,
  type: string,
  errorText: string,
  showError: boolean
  events: {
    change: () => void;
  };
}

class FormInput extends Block {
  constructor(props: FormInputProps) {
    super('div', props);
  }

  protected init() {
    this.props.events = {
      ...this.props.events,
      
    };
  }

  render() {
    return this.compile(tpl, { ...this.props });
  }
}

export default FormInput;
