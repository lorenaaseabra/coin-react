import React from 'react';
import VideoSection from './VideoSection';
import GallerySection from './GallerySection';
import CotacoesSection from './CotacoesSection';
import TextoSection from './TextoSection';
import './styles/App.css';
import './styles/VideoSection.css';
import './styles/GallerySection.css';
import './styles/CotacoesSection.css';
import './styles/TextoSection.css';


function App() {
  return (
    <div className="app-container">
      <VideoSection />
      <GallerySection />
      <CotacoesSection />
      <TextoSection />
    </div>
  );
}

export default App;
