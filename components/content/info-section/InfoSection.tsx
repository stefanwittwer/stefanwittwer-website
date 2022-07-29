import React from "react"
import styles from "./InfoSection.module.scss"

interface InfoSectionProps {
  children?: React.ReactNode
}

const InfoSection = (props: InfoSectionProps) => {
  if (!props.children) return null
  return <aside className={styles.infoSection}>{props.children}</aside>
}

export default InfoSection
