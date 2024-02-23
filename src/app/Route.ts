export class Route {
  private _pathname: string;
  private _blockClass: any;
  private _block: any | null;
  private _props: { rootQuery: string };

  constructor(pathname: string, view: any, props: { rootQuery: string }) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
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

  match(pathname: string) {
    return this.isEqual(pathname, this._pathname);
  }

  private _render(query: string, block: any) {
    const root = document.querySelector(query);
    if (root) {
      root.innerHTML = '';
      root.append(block.getContent());
      this._block.show();
      block.dispatchComponentDidMount();
    }

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
  
  isEqual(lhs: string, rhs: string) {
    return lhs === rhs;
  }
}