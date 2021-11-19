import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
      <Link className={styles.logo} to="/"><img src={logo} alt="logo movie night" /></Link>
      <Link to="/favorites"><button className={styles.buttonFavorites}>Favoritos</button></Link>
      </div>
     
    </header>
  )
}

export default Header
