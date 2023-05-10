import YouTube from "react-youtube";

const YouTubePlayer = ({ videoLink }) => {
  const videoId = videoLink.split("v=")[1];

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      //autoplay: 1,
    },
  };
  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePlayer;
