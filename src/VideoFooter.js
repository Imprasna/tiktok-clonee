import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';


const VideoFooter = ({channel, description, song}) => {
    return (
        <div className="videoFooter">
            <div className="footer_text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="video_ticker">
                    <MusicNoteIcon className="video_icon" />
                    <Ticker className="ticker" mode="smooth">
                        {
                            () => (
                                <p> { song }</p>
                            )
                        }
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter_logo" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
        </div>
    )
}

export default VideoFooter;
