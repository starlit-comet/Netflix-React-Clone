import React, { useState,useEffect } from "react";
import './Player.css';
import { useNavigate,useParams } from "react-router-dom";
import back_arrow_icon from '../../assets/back_arrow_icon.png';

const Player = ()=>{

    const {id} = useParams() ;
     const navigate = useNavigate()

    const [apiData,setApiData] = useState({
        name:'',
        key:'',
        published_at:"",
        type:'',
    })
   const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDZiNjRhM2UwZTczODIzOTI5ZGFlNDczMzNkNmNkZiIsIm5iZiI6MTc1MTAzMjQ1Ny4yMTYsInN1YiI6IjY4NWVhMjg5N2Q0NDg5OTljMjRkMTYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.weTNDo2RvRjpcx7nwxzekFYiWJ4i1BqTCYGoIXGhFIs'
  }
};

useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
          .then(res => res.json())
          .then(res => {
            console.log('ress',res)
            setApiData(res.results[0])})
          .catch(err => console.error(err));

    },[])

    return (
        <div className="player">
            <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
            <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
            title="trailer" frameBorder='0' allowFullScreen
            ></iframe>
            <div>
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
                

            </div>
        </div>
    )
}
export default Player