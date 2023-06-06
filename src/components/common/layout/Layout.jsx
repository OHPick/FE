import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import Header from '../header/Header';
import Nav from '../nav/Nav';
import { SearchQueryProvider } from '../../../contexts/SearchQueryContext';

function Layout() {
  return (
    <SearchQueryProvider>
      <div className={styles.wrap}>
        <div className={styles.backgroundWrap}>
          <div className={styles.layoutCon}>
            <Header />
            <section className={styles.contents}>
              <Outlet />
            </section>
            <Nav />
          </div>
        </div>
      </div>
    </SearchQueryProvider>
  );
}

export default Layout;
