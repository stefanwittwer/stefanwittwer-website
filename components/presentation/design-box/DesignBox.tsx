import classNames from "classnames"
import React from "react"
import styles from "./DesignBox.module.scss"

interface DesignBoxProps {
  children?: React.ReactNode
  backgroundColour?: string
  className?: string
  contentClassName?: string
}

const DesignBox = (props: DesignBoxProps) => (
  <div
    className={classNames(styles.box, props.className)}
    style={{ backgroundColor: props.backgroundColour }}
  >
    <div className={classNames(styles.content, props.contentClassName)}>{props.children}</div>
    <div className={classNames(styles.handle, styles.top, styles.left)} />
    <div className={classNames(styles.handle, styles.top, styles.right)} />
    <div className={classNames(styles.handle, styles.bottom, styles.left)} />
    <div className={classNames(styles.handle, styles.bottom, styles.right)} />
  </div>
)

export default DesignBox
