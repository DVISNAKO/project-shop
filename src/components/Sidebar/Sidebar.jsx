import React from "react";
import styles from "../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const { list } = useSelector(({ categories }) => categories);
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>Categories</div>
      <nav className={styles.menu}>
        <ul>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
              className={styles.link}
                to={`/categories/${id}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

    </section>
  );
};

export default Sidebar;
