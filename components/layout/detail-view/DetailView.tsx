import { motion } from "framer-motion"
import React from "react"
import Container from "../container/Container"
import styles from "./DetailView.module.scss"

interface DetailViewProps {
  isOpen: boolean
  children?: React.ReactNode
  onClose?: () => void
}

const DetailView = (props: DetailViewProps) => (
  <div style={{ pointerEvents: props.isOpen ? "auto" : "none" }}>
    <motion.div
      className={styles.fader}
      initial={{ opacity: 0 }}
      animate={{ opacity: props.isOpen ? 1 : 0 }}
      onClick={() => props.onClose?.()}
    />
    <motion.div
      className={styles.detailView}
      initial={{ translateY: "100%" }}
      animate={{ translateY: props.isOpen ? "0" : "100%" }}
      transition={{ type: "spring", stiffness: 250, damping: 30, mass: 0.5 }}
    >
      <button className={styles.close} onClick={() => props.onClose?.()} aria-label="Close" />
      <Container className={styles.container}>
        {props.children}
      </Container>
    </motion.div>
  </div>
)

export default DetailView
