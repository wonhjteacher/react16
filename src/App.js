import './App.css';
import {useState,useEffect} from 'react';

function App() {
  const [videos,setVideos]=useState([])
  const [weather,setWeather]=useState(null)
  const getMostPopularVideos = async() => {
    const url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=AIzaSyB4Rcz2lIQSLJsb8T06CcwDlof5oPEMJEo`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('인기동영상목록',data)
    setVideos(data.items)
  }

const getCurrentWeatherData = async() => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.543365&lon=126.951512&appid=970a4f3a1e0b5d4d9123b0599621e2c9&units=metric`
  const response = await fetch(url);
  const data = await response.json();
  console.log('날씨데이타',data)
  setWeather(data)
}

  useEffect(() => {
    getMostPopularVideos();
    getCurrentWeatherData();
  },[])
  return (
    <div className="App">
      <h1>{ weather.name}</h1>
      <h2>{weather.main.temp}도</h2>
      {
        videos.map(item=><div key={item.id}>{item.snippet.title}</div>)
      }
    </div>
  );
}

export default App;
