import React from "react"
import styles from "./header.module.css"

export default () => (
  <div className={styles.pai}>
    <h1>Titulo da Pagina</h1>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Contato</a></li>
      <li><a href="#">Sobre</a></li>
    </ul>
  </div>
)
