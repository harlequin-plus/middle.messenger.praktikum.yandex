import Block from '../../app/Block';
import tpl from './form-input.hbs';
import validate from '../../helpers/validate';

interface FormInputProps {
  name: string,
  type: string,
  title: string,
  errorText: string,
  value: string,
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
      change: (e: Event) => {
        this.props.value = (e.target as HTMLInputElement).value;
        if (validate(this.props.name, (e.target as HTMLInputElement).value)) {
          this.props.showError = false;
        } else {
          this.props.showError = true;
        }
      },
    };
  }

  render() {
    return this.compile(tpl, { ...this.props });
  }
}

export default FormInput;
