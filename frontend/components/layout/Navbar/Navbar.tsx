'use client';

import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { User, Heart, ShoppingBag, AlignRight, X, } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`${styles.navBar} relative`}>

      {/* Main navbar row */}
      <div className="container-wide">
        <div className={`${styles.navInner} flex items-center justify-between`}>

          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/brand-logo/final-logo.brand.png" alt="Brand Logo" width={150} height={150} loading="eager" />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <ul className={`${styles.navItems} flex items-center gap-6`}>
            {/* <li><Link href="/" className={styles.navLink}>HOME</Link></li> */}
            <li><Link href="/shop" className={styles.navLink}>SHOP</Link></li>
            <li><Link href="/occasion-wear" className={styles.navLink}>OCCASIONS WEAR</Link></li>
            <li><Link href="/queene-choice" className={styles.navLink}>QUEENÉ CHOICE</Link></li>
            <li><Link href="/contact" className={styles.navLink}>CONTACT</Link></li>
          </ul>

          {/* Desktop Icons */}
          <ul className={`${styles.desktopIcons} flex items-center gap-6`}>
            <li><Link href="/login" className={styles.iconLink} aria-label="Login"><User size={18} strokeWidth={1.5} /></Link></li>
            <li><Link href="/wishlist" className={styles.iconLink} aria-label="Wishlist"><Heart size={18} strokeWidth={1.5} /></Link></li>
            <li><Link href="/cart" className={styles.iconLink} aria-label="Cart"><ShoppingBag size={18} strokeWidth={1.5} /></Link></li>
          </ul>

          {/* Hamburger Button — mobile only */}
          <button type="button" className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <AlignRight size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — inside nav so position: absolute works correctly */}
      <div id="mobile-navigation" className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`} aria-hidden={!isMenuOpen}>
        {/* Mobile Nav Links */}
        <ul className={styles.mobileNavItems}>
          <li><Link href="/" onClick={closeMenu} className={styles.mobileNavLink}>HOME</Link></li>
          <li><Link href="/shop" onClick={closeMenu} className={styles.mobileNavLink}>SHOP</Link></li>
          <li><Link href="/occasion-wear" onClick={closeMenu} className={styles.mobileNavLink}>OCCASIONS WEAR</Link></li>
          <li><Link href="/queene-choice" onClick={closeMenu} className={styles.mobileNavLink}>QUEENÉ CHOICE</Link></li>
          <li><Link href="/contact" onClick={closeMenu} className={styles.mobileNavLink}>CONTACT</Link></li>
        </ul>

        {/* Mobile Icons */}
        <ul className={styles.mobileIcons}>
          <li><Link href="/login" onClick={closeMenu} className={styles.mobileIconLink} aria-label="Login"><User size={18} strokeWidth={1.5} /> Login</Link></li>
          <li><Link href="/wishlist" onClick={closeMenu} className={styles.mobileIconLink} aria-label="Wishlist"><Heart size={18} strokeWidth={1.5} /> Wishlist</Link></li>
          <li><Link href="/cart" onClick={closeMenu} className={styles.mobileIconLink} aria-label="Cart"><ShoppingBag size={18} strokeWidth={1.5} /> Cart</Link></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
