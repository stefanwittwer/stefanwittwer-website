import NavLink from "./NavLink"
import NavLinkDivider from "./NavLinkDivider"

const Navigation = () => (
  <nav role="navigation">
    <NavLink href="/about">About</NavLink>
    <NavLink href="/work">Work</NavLink>
    <NavLink href="/gallery">Gallery</NavLink>
    <NavLinkDivider />
    <NavLink href="https://www.twitter.com/stefan_wittwer" isExternal>
      Twitter
    </NavLink>
    <NavLink href="mailto:stefanwittwer@hey.com">Get in touch</NavLink>
  </nav>
)

export default Navigation
