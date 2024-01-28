
import { Link, Outlet } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header1}  >
      <section className={`${styles.flex}`}>
        <Link to="/" className={`${styles.logo}`}>
          <h3>Vacation<span>Go</span></h3>
        </Link>
        <nav className={`${styles.flex} ${styles.navbar}`}>
          <Link to="/" className={styles.navlink} >
            Acasa
          </Link>
          <Link to="/destinations" className={styles.navlink}>
            Destinatii
          </Link>
        </nav>
        <CloseIcon
          ml="auto"
          mr="5"
          w={6}
          h={6}
          _hover={{
            cursor: "pointer",
          }}
          onClick={() => {
            signOut(auth);
          }}
        />
      </section>
      <Outlet />
    </header>
  );
};

export default Header;

