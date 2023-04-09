import Handlebars from "handlebars";
import tpl from 'bundle-text:./text-button.hbs';
import './text-button.scss';

export default (id, type, title, cssClass ) => {
  return Handlebars.compile(tpl)({id, type, title, cssClass});
}