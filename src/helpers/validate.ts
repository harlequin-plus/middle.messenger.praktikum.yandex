export enum InputTypes {
  first_name = 'first_name',
  second_name = 'second_name',
  login = 'login',
  password = 'password',
  email = 'email',
  phone = 'phone',
  message = 'message',
  display_name = 'display_name',
}

const nameCheck = /^(?!.*\d)(?!.*\s)(?!.*[-]{2})[A-Za-zА-ЯЁа-яё][A-Za-zА-ЯЁа-яё-]*$/;
const loginCheck = /^(?=.*[a-zA-Z])[\w-]{3,20}$/i;
const emailCheck = /^[A-Za-z0-9]+([._-][A-Za-z0-9]+)*@[A-Za-z]+([.-][A-Za-z]+)*\.[A-Za-z]+$/;
const passwordCheck = /^(?=.*[A-Z])(?=.*\d).{8,40}$/;
const phoneCheck = /^\+?\d{10,15}$/;
const messageCheck = /^.+$/;

const validate = (input: InputTypes, value: string): boolean | void => {
  switch (input) {

    case InputTypes.login:
      return loginCheck.test(value);

    case InputTypes.password:
      return passwordCheck.test(value);

    case InputTypes.first_name:
      return nameCheck.test(value);

    case InputTypes.second_name:
      return nameCheck.test(value);

    case InputTypes.display_name:
      return nameCheck.test(value);

    case InputTypes.email:
      return emailCheck.test(value);

    case InputTypes.phone:
      return phoneCheck.test(value);

    case InputTypes.message:
      return value.trim() !== '' && messageCheck.test(value);

    default:
      break;
  }
};

export default validate;
