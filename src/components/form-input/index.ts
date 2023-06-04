import Handlebars from "handlebars";
import tpl from "bundle-text:./form-input.hbs";

export default (name: string, type: string, title: string, errorText: string, value: string, showError: boolean) => {
  const html = Handlebars.compile(tpl);

  return html({
    name,
    type,
    title,
    errorText,
    value,
    showError,
  });
};
