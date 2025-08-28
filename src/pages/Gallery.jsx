import React from 'react';

const Gallery = () => {
  const images = [
    'https://picsum.photos/id/1015/300/200',
    'https://picsum.photos/id/1016/300/200',
    'https://picsum.photos/id/1018/300/200',
    'https://picsum.photos/id/1019/300/200',
    'https://picsum.photos/id/1020/300/200',
    'https://picsum.photos/id/1021/300/200',
  ];

  return (
    <div>
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
