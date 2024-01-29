import tpl from './search-input.hbs';
import Block from '../../app/Block';
import './search-input.scss';
import assets from '../../helpers/assets';

const { searchIcon } = assets;

class SearchInput extends Block {
  constructor() {
    super('div');
  }

  render() {
    return this.compile(tpl, {
      searchIcon,
    });
  }
}

export default SearchInput;
