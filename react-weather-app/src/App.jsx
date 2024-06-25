import { useState } from 'react'
import { RiSearchLine } from "react-icons/ri";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center items-center h-svh">
        <div className="card max-w-md text-white rounded-md px-8 py-10 items-center">
            <div className="search">
                <input type="text" placeholder="Enter city name" spellcheck="false" className="search-city"/>
                <input type="text" placeholder='Enter city name..' spellCheck = 'false' className='flex items-center' />
                <button><RiSearchLine /></button>
            </div>
            <div className="weather">
                <img className="weather-icon" src={weatherIcon}/>
                <h1 className="temp" >22°c</h1>
                <h2 className="city">New York</h2>
            </div>
            <div className="details">
                <div className="col">
                    <img src="./images/weather.png"/>
                    <div className="humidity">
                        <p id="humidity">56%</p>
                        <h3>Humidity</h3>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/air.png" alt=""/>
                    <div className="wind">
                        <p id="wind-speed">10.32 km/h</p>
                        <h3>Wind Speed</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
