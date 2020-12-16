import React from "react";
import "./VideoList.css";

const VideoItem = ({ video, selectedVideo }) => {
  return (
    <div className="">
      <div className="item img-list " onClick = {()=> selectedVideo(video)}>
        <img
          className="ui image"
          src={video.snippet.thumbnails.high.url}
          alt="this is an img"
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
