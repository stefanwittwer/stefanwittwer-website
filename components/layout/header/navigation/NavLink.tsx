import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isExternal?: boolean
}

const doesPathMatch = (linkPath: string, currentPath: string) => {
  if (linkPath === currentPath) return true
  return currentPath.startsWith(linkPath + "/")
}

const NavLink = (props: NavLinkProps) => {
  const router = useRouter()
  return (
    <Link
      href={props.href}
      className={doesPathMatch(props.href, router.pathname) ? "current" : undefined}
      target={props.isExternal ? "_blank" : undefined}
      rel={props.isExternal ? "noopener noreferrer" : undefined}
    >
      {props.children}
    </Link>
  )
}

export default NavLink
