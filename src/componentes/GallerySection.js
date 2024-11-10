import React from 'react';
import './styles/GallerySection.css';

function GallerySection() {

  const images = [
    '/assets/img1.jpg',
    '/assets/img2.jpg',
    '/assets/img3.jpg',
    '/assets/img4.jpg',
  ];

  return (
    <div className="section gallery-section d-flex justify-content-around">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Imagem ${index + 1}`} className="gallery-image" />
      ))}
    </div>
  );
}

export default GallerySection;

