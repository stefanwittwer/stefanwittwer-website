import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <a>
        <Image
          className={styles.logo}
          src="/assets/sw-logomark.svg"
          height={38}
          width={68}
          alt="Stefan Wittwer"
        />
      </a>
    </Link>
    <nav role="navigation">
      <Link href="/projects">Projects</Link>
      <Link href="/writing">Writing</Link>
      <Link href="/hello">Get in touch</Link>
    </nav>
  </header>
);

export default Header;
