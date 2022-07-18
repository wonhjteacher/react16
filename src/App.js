import './App.css';
import {useState,useEffect} from 'react';

function App() {
  const [videos,setVideos]=useState([])
  const getMostPopularVideos = async() => {
    const url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=AIzaSyB4Rcz2lIQSLJsb8T06CcwDlof5oPEMJEo`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('인기동영상목록',data)
    setVideos(data.items)
  }

  useEffect(() => {
    getMostPopularVideos();
  },[])
  return (
    <div className="App">
      {
        videos.map(item=><div key={item.id}>{item.snippet.title}</div>)
      }
    </div>
  );
}

export default App;
