import React from "react"
import styles from "./FAQBlock.module.scss"

interface FAQBlockProps {
  title: string
  children?: React.ReactNode
}

const FAQBlock = (props: FAQBlockProps) => (
  <div className={styles.faqBlock}>
    <h2>{props.title}</h2>
    {props.children}
  </div>
)

export default FAQBlock
