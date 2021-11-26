import React, {useState, useEffect } from 'react';
import './App.css';
import db from './Firebase';
import Video from './Video';

function App()
{
  // this is used to pull data from firebase
  const [videos, setVideos] = useState([]);
  // here we are pointing to the database we created and literally taking a snapshot of the database and looping it over to update the state
  db.collection('videos').onSnapshot((snapshot) =>
  {
    setVideos(snapshot.docs.map((doc) => doc.data()))
  })
  useEffect(() =>
  {
    // this fires once when the component loads, and when you pass the 'state' into the array. It loads whenever the state changes 
    
  }, [videos])

  return (
    <div className="App">
      <div className="app_videos">
        
        {videos.map(
          ({ url, channel, description, song, likes, comments, shares }) => (
          <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            comments={comments}
            shares={shares}
          />
          )
        )}

        {/* <Video
          url="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
          channel="Imprasna"
          description="just random stuff"
          likes={865}
          comments={486}
          shares={200}
          song="Usher - Yeah"

        />
        <Video
          url="https://assets.mixkit.co/videos/preview/mixkit-womans-feet-splashing-in-the-pool-1261-large.mp4"
          channel="Fisher"
          description="into the sea"
          likes={900}
          comments={426}
          shares={130}
          song="Avicii - Wake me up"
        />
        <Video
          url="https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-1240-large.mp4"
          channel="Greeshh"
          description="dance is dope"
          likes={950}
          comments={320}
          shares={80}
          song="Imagine Dragons - Believer"
        />
        <Video
          url="https://assets.mixkit.co/videos/preview/mixkit-girl-posing-for-the-camera-in-the-middle-of-nowhere-34407-large.mp4"
          channel="Whothehell"
          description="photograph is what is love"
          likes={700}
          comments={358}
          shares={60}
          song="Neilback - Photograph"
        /> */}
      </div>
    </div>
  );
}

export default App;
