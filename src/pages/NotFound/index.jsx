
import React from 'react'
import styles from './NotFound.module.css'
import jtConfuso from '../../assets/jt-confuso.png'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={jtConfuso} alt="um homem confuso" />
      <div className={styles.containerContent}>
      <h1 className={styles.title}>OPS! não encontramos essa página</h1>
      <Link className={styles.link} to="/">Voltar ao inicio</Link>
      </div>
     
    </div>
  )
}

export default NotFound
