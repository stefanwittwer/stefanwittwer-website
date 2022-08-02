import React from "react"
import NavLink from "./NavLink"

const Navigation = () => (
  <nav role="navigation">
    <NavLink href="/about">About</NavLink>
    <NavLink href="/projects">Projects</NavLink>
    <NavLink href="https://world.hey.com/stefanwittwer">Writing</NavLink>
    <NavLink href="mailto:stefanwittwer@hey.com">Get in touch</NavLink>
  </nav>
)

export default Navigation
