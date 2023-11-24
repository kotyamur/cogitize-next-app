"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";
import { FC } from "react";

const navList = [
  { label: "Иерархия", href: "/hierarchy" },
  { label: "Должности", href: "/" },
  { label: "Список персонала", href: "/staff" },
  { label: "Наборы экипировки", href: "/equipment" },
];
//positions
export const Navigation: FC = () => {
    const pathname = usePathname();
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        {navList.map(({ label, href }) => (
          <li
            key={label}
            className={pathname === href ? styles.activeTab : styles.tabsStyles}
          >
            <Link
              href={href}
              className={pathname === href ? styles.activeLink : styles.tabLink}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};