import React, {useRef, useState} from "react";
import "./video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";


const Video = ({
    url,
    channel,
    description,
    song,
    likes,
    comments,
    shares
}) =>
{
    const [playing, setPlaying] = useState(false);

    // initially we don't have the video playing. This is useRef functionality
    const videoRef = useRef(null);

    const onVideoPress = () =>
    {
        if (playing) {
            // here on tap to the video it plays, for that we use useRef in react for this functionality
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }


	return (
		<div className="video">
			<video
                loop
                // controls
                onClick={onVideoPress}
                // this piece of code is used to the controls of the video
                ref={videoRef}
                className="video_player"
				src={url}
            ></video>
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar likes={likes} comments={comments} share={shares} />
		</div>
	);
};

export default Video;
