import classNames from "classnames"
import React from "react"
import styles from "./Container.module.scss"

interface ContainerProps {
  children?: React.ReactNode
  className?: string
}

const Container = (props: ContainerProps) => (
  <div className={classNames(styles.container, props.className)}>{props.children}</div>
)

export default Container
