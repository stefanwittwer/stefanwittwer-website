import React from "react"
import styles from "./InfoElement.module.scss"

interface InfoElementProps {
  title: string
  children: React.ReactNode
}

const InfoElement = (props: InfoElementProps) => {
  if (!props.children) return null
  return (
    <div className={styles.info}>
      <span className={styles.infoText}>{props.children}</span>
      <span className={styles.infoDescription}>{props.title}</span>
    </div>
  )
}

export default InfoElement
