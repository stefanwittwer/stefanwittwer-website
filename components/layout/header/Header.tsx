import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import styles from "./Header.module.scss"
import NavLink from "./navigation/NavLink"

interface HeaderProps {
  lightAppearance?: boolean
}

const Header = (props: HeaderProps) => (
  <header className={classNames(styles.header, { [styles.light]: props.lightAppearance })}>
    <Link href="/">
      <a>
        <Image
          className={styles.logo}
          src={props.lightAppearance ? "/assets/sw-logomark-w.svg" : "/assets/sw-logomark.svg"}
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
