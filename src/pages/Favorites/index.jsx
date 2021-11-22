import React, {useState} from 'react'
import styles from './Favorites.module.css'
import remover from '../../assets/bin.png'
import emptyList from '../../assets/empty-list.png'


const Favorites = () => {
  const [storageMovies, setStorageMovies] = useState([]);
  const localStorageItems = localStorage.getItem('movies')
  
  React.useEffect(()=>{
    setStorageMovies(JSON.parse(localStorageItems) || [])
   
  },[localStorageItems])

  function handleDelete(id){
    let filterMovies = storageMovies.filter((item)=>{
      return (item.id !== id)
    })

    setStorageMovies(filterMovies);
    localStorage.setItem('movies', JSON.stringify(filterMovies))
  }
  return(
  <>
  
  {storageMovies.length === 0 ? 
    <div className={styles.containerEmptyList}>
      <img className={styles.imageEmptyList} src={emptyList} alt="imagem de uma menina comendo pipoca" />
      <p className={styles.textoEmptyList}>Você ainda não possui nenhum filme favorito!</p>
    </div>
  
  :
    <div className={styles.container}>
      <h1 className={styles.title}>Meus Favoritos</h1>
     {storageMovies.map(({id, nome})=>{
       return (
         <div className={styles.containerContent} key={id}>
          <p className={styles.titleContent}>{nome}</p>
          <a className={styles.linkContent} href={`/filme/${id}`} >ver detalhes</a>
          <img onClick={()=> handleDelete(id)} className={styles.iconDelete} src={remover} alt="icone de remover" />
         </div>
         
       )
     })}
      
    </div>
  
    }
    </>
  )
}

export default Favorites
