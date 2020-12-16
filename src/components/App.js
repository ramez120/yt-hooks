import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import SelectedVideo from "./SelectedVideo";
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  // get searched term from youtube api
   const [videos, search] = useVideos('random');
  useEffect(()=>{
      setSelectedVideo(videos[0]);
  },[videos])
 

  return (
    <div>
      <SearchBar onSubmit={search} />
      <div className="ui container">
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column ">
              <SelectedVideo selectedVideo={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={videos}
                selectedVideo={setSelectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
