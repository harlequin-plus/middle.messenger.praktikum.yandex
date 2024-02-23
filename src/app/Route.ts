export class Route {
  constructor(pathname, view, props) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname) {
    return this.isEqual(pathname, this._pathname);
  }

  private _render(query, block) {
    const root = document.querySelector(query);
    root.innerHTML = '';
    root.append(block.getContent());
    this._block.show();
    block.dispatchComponentDidMount();

    return root;
  }

  render() {

    if (!this._block) {
      this._block = new this._blockClass();
      this._render(this._props.rootQuery, this._block);

      return;
    }
    this._render(this._props.rootQuery, this._block);
  }
  

  isEqual(lhs, rhs) {
    return lhs === rhs;
  }
}
