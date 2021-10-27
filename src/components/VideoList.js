import React from "react";

import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const { videos, onVideoSelect } = props;

  return (
    <div className="ui relaxed divided list">
      {videos.map((v) => (
        <VideoItem video={v} onVideoSelect={onVideoSelect} key={v.id.videoId} />
      ))}
    </div>
  );
};

export default VideoList;
