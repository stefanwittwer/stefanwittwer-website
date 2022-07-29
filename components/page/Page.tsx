import classNames from "classnames"
import React from "react"
import Header from "../layout/header/Header"
import styles from "./Page.module.scss"

interface PageProps {
  children?: React.ReactNode
  className?: string
  fill?: boolean
  lightHeader?: boolean
  style?: React.CSSProperties
}

const Page = (props: PageProps) => (
  <div
    className={classNames(styles.page, props.className, {
      [styles.fill]: props.fill,
    })}
    style={props.style}
  >
    <Header lightAppearance={props.lightHeader} />
    {props.children}
  </div>
)

export default Page
