import React, { useState } from 'react'
import axios from 'axios'
import './home.css'

import UserDropodown from '../../components/UserDropodown'

function Home() {
  const API_KEY = '44cabff4fcce616a49480b1f9e33de2a'
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const handleSearch = (event) =>{
    if(event.key === 'Enter'){
      axios.get(url).then((res)=>{
        setData(res.data)
        setLocation('')
        console.log('data',res.data)
      })
    }
  }
  return (
    <div className='home'>
     <div className="container pt-5">
      <div className="user">
      <UserDropodown style={{background:'black'}}/>
      </div>
      <div className="search pb-5">
        <input type='text' value={location} 
        onChange={event => setLocation(event.target.value)} 
        onKeyDown ={handleSearch}
        placeholder = 'Enter Location'
        
        />
      </div>
       <div className="top">
        <div className="location">
    <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main?<h1 className='p-0'>{data.main.temp}Fº</h1>:null}
      
        </div>
        <div className="description">
          {data.weather? <p className='fs-5'>{data.weather[0].main}</p>:null}
          
        </div>
       </div>
    {data.name != undefined &&
       <div className="bottom">
        <div className="feels">
           <b>Feels Like</b>
           {data.main?<p className='fs-6'>{data.main.feels_like} Fº</p>:null}
          
        </div>
        <div className="humidity">
          <b>Humidity</b>
          {data.main?<p className='fs-6'>{data.main.humidity} %</p>:null}
        </div>
        <div className="wind">
          <b>Wind Speed</b>
          {data.main?<p className='fs-6'>{data.wind.speed} %</p>:null}
          

        </div>
       </div>
    }

     </div>
    </div>
  )
}

export default Home
