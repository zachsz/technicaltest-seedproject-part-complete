import React from 'react';
import './sitenav-component.scss';
import {BurgerMenu} from '../burgermenu/burgermenu-component'
export class SiteNav extends React.Component {
  render() {
    return (<nav className="site-nav"><div className="site-nav__content"><div className="site-nav__logo"></div><div className="site-nav__burger-menu"><BurgerMenu></BurgerMenu></div></div></nav>);
  }
}