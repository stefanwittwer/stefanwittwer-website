import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "./Header.module.scss"
import Navigation from "./navigation/Navigation"

interface HeaderProps {
  lightAppearance?: boolean
}

const Header = (props: HeaderProps) => {
  const [showMobileHeader, setShowMobileHeader] = useState<boolean>(false)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [hasMobileMenuBeenTouched, setHasMobileMenuBeenTouched] = useState<boolean>(false)

  useEffect(() => {
    const onSizeChanged = () => {
      const showHeader = window.innerWidth < 768
      if (showHeader !== showMobileHeader) setShowMobileHeader(showHeader)
    }
    onSizeChanged()
    window.addEventListener("resize", onSizeChanged)
    return () => window.removeEventListener("resize", onSizeChanged)
  }, [showMobileHeader])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("scroll-lock")
    } else {
      document.body.classList.remove("scroll-lock")
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={classNames(styles.header, {
        [styles.light]: props.lightAppearance,
        [styles.mobile]: showMobileHeader,
        [styles.mobileMenuOpen]: isMobileMenuOpen,
        [styles.mobileMenuTouched]: hasMobileMenuBeenTouched,
      })}
    >
      <Link href="/" className={styles.brand}>
        <Image
          className={styles.logo}
          src="/assets/sw-logomark.svg"
          height={38}
          width={68}
          alt="Stefan Wittwer"
        />
      </Link>
      <Navigation />
      {showMobileHeader && (
        <button
          className={styles.menuButton}
          aria-label="Menu"
          onClick={() => {
            setHasMobileMenuBeenTouched(true)
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }}
        />
      )}
    </header>
  )
}

export default Header
