import Block from '../../app/Block';
import tpl from './nav-link.hbs'


interface NavLinkProps {
  anchor: string,
  href: string,
  events: {
    click: (e: Event) => void
  }
}
class NavLink extends Block {
  constructor(props: NavLinkProps) {
    super("div", props);
  }

  render() {
    return this.compile(tpl, { ...this.props });
  }
}

export default NavLink;
