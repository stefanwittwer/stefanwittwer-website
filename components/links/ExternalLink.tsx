import React from "react"

interface ExternalLinkProps {
  href: string
  children?: React.ReactNode
  tint?: string
}

const ExternalLink = (props: ExternalLinkProps) => (
  <a href={props.href} target="_blank" rel="noreferrer" style={{ color: props.tint }}>
    {props.children}
  </a>
)

export default ExternalLink
