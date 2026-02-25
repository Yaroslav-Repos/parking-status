'use client';

import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>🚗 Parking Bot</h1>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Головна</Link>
          <Link href="/parking" className={styles.link}>Паркування</Link>
        </nav>
      </div>
    </header>
  );
}