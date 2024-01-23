import { useState } from 'react';
import {
  RxHamburgerMenu
} from 'react-icons/rx';
import useWindowScrollPositions from '../../hooks/useWindowScroll';
import links from '../../types/links.constants';
import './style.scss';

interface INavbarProps {
  className: string;
}

const NavBar = ({ className }: INavbarProps) => {
  const [expandMenu, setExpandMenu] = useState<boolean>(false);

  const onExpandMenu = () => {
    setExpandMenu(!expandMenu);
  }

  const scrollPosition = useWindowScrollPositions();

  return (
    <div id="navbar" className={`navbar ${className} ${(scrollPosition.scrollY > 0 || expandMenu) ? "navbar-onscroll" : ""}`}>
      <div className='navbar-toolbox'>
        <div className='navbar-responsive'>
          <div className='brand-logo'>
            OrliDev
          </div>
          <input type="checkbox" id="menu-button"/>
          <label className='navbar-menu-label' onClick={onExpandMenu}>
            <RxHamburgerMenu className='navbar-menu-icon' color='white'/>
          </label>
        </div>
        <ul className={`navbar-links ${!expandMenu ? "navbar-links-unshow" : "navbar-links-show"}`}>
          {links.map(value => 
            <li className='navbar-link'> 
              <value.icon color='white' className='navbar-link-logo'/>
              <a href={value.path} className='navbar-link-text'>
                {value.title}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;