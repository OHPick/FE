import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './nav.module.scss';
import homeIcon from '../../../assets/svg/home.svg';
import chattingIcon from '../../../assets/svg/chatting.svg';
import mypageIcon from '../../../assets/svg/mypage.svg';
import postIcon from '../../../assets/svg/postIcon.svg';
import topIcon from '../../../assets/svg/topIcon.svg';
import { SearchQueryContext } from '../../../contexts/SearchQueryContext';

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { resetSearchQuery } = useContext(SearchQueryContext);

  const handleHomeClick = () => {
    resetSearchQuery();
  };

  const handleScrollToTop = () => {
    // 스크롤탑 기능
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <Link to='/main' onClick={handleHomeClick}>
          <li>
            <img
              src={homeIcon}
              alt='home'
              className={
                location.pathname === '/main'
                  ? styles.selectedIcon
                  : styles.icon
              }
            />
          </li>
        </Link>
        <Link to='/posting'>
          <li>
            <img
              src={postIcon}
              alt='posting'
              className={
                location.pathname.startsWith('/posting')
                  ? styles.selectedIcon
                  : styles.icon
              }
            />
          </li>
        </Link>
        <Link to='/chatting'>
          <li>
            <img
              src={chattingIcon}
              alt='chatting'
              className={
                location.pathname.startsWith('/chatting')
                  ? styles.selectedIcon
                  : styles.icon
              }
            />
          </li>
        </Link>
        <Link to='/mypage'>
          <li>
            <img
              src={mypageIcon}
              alt='mypage'
              className={
                location.pathname === '/mypage' ||
                location.pathname === '/likedposts' ||
                location.pathname === '/myposts' ||
                location.pathname === '/myreservations'
                  ? styles.selectedIcon
                  : styles.icon
              }
            />
          </li>
        </Link>
      </ul>
      {location.pathname === '/main' && (
        <button
          type='button'
          className={styles.scrollTop}
          onClick={handleScrollToTop}
        >
          <img src={topIcon} alt='scroll-top' />
        </button>
      )}
    </nav>
  );
}

export default Nav;
