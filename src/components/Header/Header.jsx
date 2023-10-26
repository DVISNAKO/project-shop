import React from "react";
import { BsFillHeartFill, BsCart } from "react-icons/bs";
import {ROUTES} from '../utils/routes';
import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className={styles.header}>
      <Link to={ROUTES.HOME}><div className={styles.logo}>Logo</div></Link>
      <div className={styles.info}>
        <form>
          <input
          style={{margin: 10}}
            type="search"
            name="search"
            placeholder="Search for anyting..."
            autoComplete="off"
            onChange={() => {}}
            value=""
          />
          <Link><BsCart style={{margin: 10}}/></Link>
          <Link><BsFillHeartFill style={{margin: 10}}/></Link>
        </form>
      </div>
    </section>
  );
};

export default Header;
