/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css'

export function Profile() {
  return (
  <div className={styles.profile}>
    <img className={styles.avatar} src='https://github.com/FranBronstrup.png' alt="Foto de Francine Bronstrup"/>
    <h1 className={styles.name}>Francine Brönstrup</h1>
  </div>
  )
}
export function Especilização (){
  return (
    <div className={styles.especilização}>
      <h3>Especialização</h3>
      <br></br>
      <p>Breve descrição</p>
    </div>
  )
}