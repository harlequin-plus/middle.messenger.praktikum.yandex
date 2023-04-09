import Handlebars from "handlebars";
import tpl from "bundle-text:./form-input.hbs";

export default (name, type, title, errorText, value, showError) => {
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
