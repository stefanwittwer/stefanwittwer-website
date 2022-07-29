import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const doesPathMatch = (linkPath: string, currentPath: string) => {
  if (linkPath === currentPath) return true
  return currentPath.startsWith(linkPath + "/")
}

const NavLink = (props: NavLinkProps) => {
  const router = useRouter()
  return (
    <Link href={props.href}>
      <a className={doesPathMatch(props.href, router.pathname) ? "current" : undefined}>
        {props.children}
      </a>
    </Link>
  )
}

export default NavLink
