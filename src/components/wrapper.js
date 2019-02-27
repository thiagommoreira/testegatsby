import React from "react"
import styles from "./wrapper.module.css"

export default ({ children }) => (
  <div className={styles.container}>{children}</div>
)