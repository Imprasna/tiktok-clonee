import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";

const VideoSidebar = ({likes, shares, comments}) => {
	const [liked, setLiked] = useState(false);

	return (
		<div className="videoSidebar">
			<div className="sidebar_options">
				{/* toggle between the icons when they are clicked */}
				{liked ? (
					<FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
				) : (
					<FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)} />
				)}
				{/* <FavoriteIcon /> */}
				<p>{liked ? likes + 1 : likes}</p>
			</div>

			<div className="sidebar_options">
				<MessageIcon fontSize="large" />
                <p>{ comments }</p>
			</div>

			<div className="sidebar_options">
				<ShareIcon fontSize="large" />
				<p>{ shares }</p>
			</div>
		</div>
	);
};

export default VideoSidebar;
