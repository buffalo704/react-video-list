import React, { Component } from 'react';

/**
 * Created by sso on 5/4/17.
 */


const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const height = {'height' : '500px'}
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-reponsive-16by9" style={height}>
                <iframe src={url} className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;