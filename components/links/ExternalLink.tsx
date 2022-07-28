import React from "react";

interface ExternalLinkProps {
  href: string;
  children?: React.ReactNode;
}

const ExternalLink = (props: ExternalLinkProps) => (
  <a href={props.href} target="_blank" rel="noreferrer">
    {props.children}
  </a>
);

export default ExternalLink;
