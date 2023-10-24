import YouTube from "react-youtube";
const VideoPlayer = (props) => {
  const videoId = 'rrGMENN1iaY?si=5EWjo9J0W6mCxFJ5'; // Replace with your video ID

  const videoOnReady = (event) => {
    // Your custom code to run when the video is ready
    console.log('Video is ready to play.');

    // Play the video when it's ready
    event.target.playVideo();
  };

  const videoOnEnd = (event) => {
    // Your custom code to run when the video ends
    console.log('Video has ended.');
    props.clickEvent();
  };

  const width = window.innerWidth;
  const height = window.innerHeight;

  const opts = {
    height: height,
    width: width,
    playerVars: {
      // Add any player variables you need here
      autoplay: 1,
      controls: 0,
    },
  };

  return (
    <div>
      <YouTube
        style={{ position: 'absolute', top: 0, zIndex: '10000', overflow: 'hidden' }}
        videoId={videoId}
        opts={opts}
        onReady={videoOnReady}
        onEnd={videoOnEnd}
      />
    </div>
  );
};

export default VideoPlayer;
