import React from 'react';
import './styles/VideoSection.css';

function VideoSection() {
  return (
    <div className="section video-section">
      <iframe 
        width="100%" 
        height="315" 
        src="https://www.youtube.com/embed/MRIMT0xPXFI?si=27mHsEhWepSqZyOa" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
        allowfullscreen>
      </iframe>
    </div>
  );
}

export default VideoSection;
