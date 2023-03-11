import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import sun from '../Image/icons8-sun.gif'
import sun from '../Image/PngItem_470515.png'
import './Home.css'
function Home() {

  const [data, setData] = useState();
  const [search, setSearch] = useState('Ranchi')
  const API = `//api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=54648fbd0b0cb67e32ae7a2c413c21d7`
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();


  useEffect(() => {
    fetch(API).then(r => {
      return r.json().then(res => {
        console.log(res)
        setData3(res)
      })
    })
  }, [search])


  useEffect(() => {
    fetch(API).then(r => {
      return r.json().then(res => {
        console.log(res.sys.country)
        setData2(res.sys.country)
      })
    })
  }, [search])




  useEffect(() => {
    // let time =  setTimeout(() => {
    fetch(API).then(r => {
      return r.json().then(res => {
        console.log(res.main)
        setData(res.main)
      })
    })
    // }, 1000)
    // return () => clearTimeout(time);
  }, [search])


  return (
    <>
    
      <div className="text-center mb-2 mt-3">
      <h1 className='main mb-1 text-center'>Weather Information</h1>

        <input onChange={(e) => { setSearch(e.target.value) }} className='mt-2' type="text" name="" id="" placeholder='Search your city...' />
        {/* <div className=""><i className="fa-solid fa-magnifying-glass "></i> */}

      </div>

      {
        !data ? (
          <p className='text-center notfound'>No Data found...!</p>
        ) : (
          <>
            <div className="box m-3 p-2 mb-0">
              <div className="box2 m-4">
                <img src={sun} alt="sun" />
              </div> 
              <div className="text">
                <b><h1 className='cityName'>{search}, {data2} </h1></b>
                <h2 className='celcius'>{data.temp} &#8451;</h2>
                <h2 className='cityData'>Humidity: {data.humidity}%</h2>
                <h2 className='cityData'>Pressure: {data.pressure}</h2>
                <h2 className='cityData'> Minimum Temprature: {data.temp_min}</h2>
                <h2 className='cityData'>Maximum Temprature: {data.temp_max}</h2> 
              </div>
            </div>
            
          </>
        )
      }
    </>
  )
}

export default Home;