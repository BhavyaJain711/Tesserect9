import React from 'react'
import { useEffect } from 'react'
function Video() {
    useEffect(() => {
        window.scrollTo(0, 0)

      }, [])
  return (<>
    <div style={{zIndex:'10',width:'100vw',height:'100vh',position:'relative',top:'0'}}>
    <iframe src="https://olafwempe.com/mp3/silence/silence.mp3" type="audio/mp3" allow="autoplay" id="audio" style={{display:"none"}}></iframe>

    <video width="640" height="360"  controls autoPlay>
        <source src="http://localhost:5001/video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </>
  )
}

export default Video