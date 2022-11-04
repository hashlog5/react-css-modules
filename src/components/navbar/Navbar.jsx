import { useState } from 'react';

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from 'react-icons/ai';

import styles from './Navbar.module.css';

import Logo from '../../images/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <img src={Logo} alt='' />

      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(' ') : [styles.menu]
          }
        >
          <li>
            <a href='/'>Learn More</a>
          </li>

          <li>
            <a href='/'>Login</a>
          </li>

          <li>
            <a href='/'>Sign Up</a>
          </li>

          <li>
            <AiOutlineSearch size={25} styles={{ marginTop: '6px' }} />
          </li>

          <li>
            <AiOutlineUser size={25} styles={{ marginTop: '6px' }} />
          </li>
        </ul>
      </nav>

      <div className={styles.mobile_btn} onClick={() => setNav(!nav)}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default Navbar;
