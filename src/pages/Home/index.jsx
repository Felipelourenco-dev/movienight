import React,{useState, useEffect} from 'react'
import Loading from '../Loading'
import {Link} from 'react-router-dom'
import api from '../../services/api'
import styles from './Home.module.css'

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
   async function loadFilmes(){ 
     setLoading(true)
     const response = await api.get('r-api/?api=filmes')
    setMovies(response.data)
    setLoading(false)
   
  }
  loadFilmes()
},[])

  return (
    <>
    {loading ?
    <Loading
    type="cylon"
    color="#00000"
    className={styles.loading}
     />

     :
     
    <div className={styles.container}>
      {movies.map(({id,nome,foto})=> {
        return(
        <div className={styles.card} key={id}>
          <p className={styles.titleCard}>{nome}</p>
          <img className={styles.imageCard} src={foto} alt={nome} />
          <Link to={`/filme/${id}`} className={styles.buttonCard}>Acessar</Link>
        </div>
      )})}

    </div>
   }
   </>
  )
}

export default Home;
