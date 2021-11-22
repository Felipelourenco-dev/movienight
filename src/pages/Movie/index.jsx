import React,{useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Loading from '../../utils/Loading'
import api from '../../services/api'
import styles from './Movie.module.css'
import { ToastContainer, toast } from 'react-toastify';


<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    async function getMovie(){
      setLoading(true);
      const response = await  api.get(`r-api/?api=filmes/${id}`)

      if(response.data.length === 0){
        //tentou acessar com ID inexistente e é redirecionado para a Home
        navigate('/')
        return
      }

      setMovies(response.data)
      setLoading(false)
    }
   
    getMovie();

  },[id, navigate]);

  function saveMovie(){
   const listMovies = localStorage.getItem('movies');

   let savedMovies = JSON.parse(listMovies) || [];

   //Verificando se já existe esse filme salvo!
   const hasMovie = savedMovies.some((savedMovie) => savedMovie.id === movies.id );

   if(hasMovie){
     toast.warning('Este filme já está salvo');
     return
   }

   savedMovies.push(movies);
   localStorage.setItem('movies', JSON.stringify(savedMovies))
   toast.success('Filme salvo com sucesso', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  }

  
  return (

    <>
    {loading  ?

    <Loading
    type="cylon"
    color="#00000"
    className={styles.loading}
     />
    
        :
    
    <div className={styles.container}>
      <h1 className={styles.title}>{movies?.nome}</h1>
      <img className={styles.imageBanner} src={movies?.foto} alt={movies?.nome}/>
      <div>
        <h3 className={styles.TitleSinopse}>Sinopse</h3>
      </div>
      <span className={styles.textSinopse}>{movies?.sinopse}</span>
      <div className={styles.containerButtons}>
        <button className={styles.buttonFavorites} onClick={saveMovie}>Favoritar</button>
        <a className={styles.buttonTrailer} target="blank" href={`https://www.youtube.com/results?search_query=${movies?.nome} Trailer`}>Trailer</a>
      </div>
    </div>
    }
 </>
  )
   
  
}

export default Movie
