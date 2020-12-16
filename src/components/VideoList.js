import React from "react";
import VideoItem from './VideoItem';
const VideoList = ({ videos, selectedVideo }) => {
  const renderedVideos = videos.map((video) => {
    return <VideoItem video = {video} selectedVideo = {selectedVideo}/>;
  });
  return <div className = "ui relaxed divided list container ">{renderedVideos}</div>;
};
export default VideoList;
