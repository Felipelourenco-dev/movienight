import React from 'react'
import ReactLoading from 'react-loading'
import styles from './Loading.module.css'

const Loading = ({type, color}) => {
  return (
    <div className={styles.loading}>
      <ReactLoading type={type} color={color}  />
    </div>
  )
}

export default Loading
