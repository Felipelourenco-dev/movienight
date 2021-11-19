import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import api from '../../services/api'
import styles from './Home.module.css'

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
   async function loadFilmes(){ 
     const response = await api.get('r-api/?api=filmes')
    setMovies(response.data)
   
  }
  loadFilmes()
},[])


  return (
    <div className={styles.container}>
      {movies.map(({id,nome,foto})=> {
        return(
        <div className={styles.card} key={id}>
          <p className={styles.titleCard}>{nome}</p>
          <img className={styles.imageCard} src={foto} alt={nome} />
          <Link to="/" className={styles.buttonCard}>Acessar</Link>
        </div>
      )})}

    </div>
  )
}

export default Home;
