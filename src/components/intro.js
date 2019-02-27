import React from "react"
import styles from "./intro.module.css"
import Depoimento from "./depoimento"

export default () => (
  <div className={styles.pai}>
    <h2>Section intro</h2>
    <ul>
      <li>
        <Depoimento numero="Primeiro" nome="Primeiro Depoimento" />
        <Depoimento numero="Segundo" nome="Segundo Depoimento" />
      </li>
    </ul>
  </div>
)
