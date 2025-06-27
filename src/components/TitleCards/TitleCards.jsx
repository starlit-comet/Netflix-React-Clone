import React,{useRef,useEffect, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
const TitleCards = ({title,category}) => {
  const [apiData,setApiData] = useState([])
  const cardsRef = useRef()
  // tmdb fetch options code from api documentation

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDZiNjRhM2UwZTczODIzOTI5ZGFlNDczMzNkNmNkZiIsIm5iZiI6MTc1MTAzMjQ1Ny4yMTYsInN1YiI6IjY4NWVhMjg5N2Q0NDg5OTljMjRkMTYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.weTNDo2RvRjpcx7nwxzekFYiWJ4i1BqTCYGoIXGhFIs'
  }
};

  const handleWheel=(event)=>{
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY;

  }
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWheel)
  },[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list " ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}.jpg`} alt={`${card.original_title} poster`} />
              <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards