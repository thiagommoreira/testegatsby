import React from "react"
import styles from "./depoimento.module.css"

export default (props) => (
  <div>
    <h2>{props.numero}</h2>
    <span>{props.nome}</span>
  </div>
)
