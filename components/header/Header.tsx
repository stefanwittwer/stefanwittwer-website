import Image from "next/image"
import Link from "next/link"
import styles from "./Header.module.scss"
import NavLink from "./navigation/NavLink"

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
      <NavLink href="/about">About</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/writing">Writing</NavLink>
      <NavLink href="/hello">Get in touch</NavLink>
    </nav>
  </header>
)

export default Header
