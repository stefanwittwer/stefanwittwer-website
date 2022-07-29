import React from "react"
import styles from "./Section.module.scss"

interface SectionProps {
  title: string
  children?: React.ReactNode
}

const Section = (props: SectionProps) => (
  <section className={styles.section}>
    <h2>{props.title}</h2>
    {props.children}
  </section>
)

export default Section
