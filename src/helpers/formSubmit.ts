import validate, {InputTypes} from './validate';

const handleSubmit = (children: Record<string, any>) => {
  const form = document.querySelector('form');

  if (!form) {
    return;
  }

  const inputs = form.querySelectorAll('input, textarea');
  const errors: string[] = [];

  inputs.forEach((input: HTMLInputElement) => {
    if (validate(input.name as InputTypes, input.value)) {
      const index = errors.indexOf(input.name);
      if (index !== -1) {
        errors.splice(index, 1);
      }
    } else {
      errors.push(input.name);
    }
  });

  Object.entries(children).forEach(([key, element]) => {
    if (element.props && element.props.name && errors.includes(element.props.name)) {
      element.props.showError = true;
    }
  });

  if (errors.length === 0) {
    const formData: {[key: string]: any} = {};

    inputs.forEach((input: HTMLInputElement) => {
      const { name, value } = input;
      formData[name] = value;
    });
    
    return formData;
    //return {
    //  'success': true,
    //  'data': formData,
    //};
  } else {
    const result = {
      'success': false,
      'message': `Ошибка: ${errors}`,
    }
    alert(`Ошибка: ${errors}`)
    return result;
  }
};

export default handleSubmit;
