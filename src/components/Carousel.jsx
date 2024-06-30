import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const images = [
  'https://c4.wallpaperflare.com/wallpaper/599/374/514/jujutsu-kaisen-yuji-itadori-sukuna-anime-anime-boys-hd-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/158/122/422/anime-anime-boys-jujutsu-kaisen-yuji-itadori-sakuna-hd-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/288/187/714/anime-jujutsu-kaisen-hd-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/70/1016/58/anime-anime-boys-jujutsu-kaisen-yuji-itadori-sakuna-hd-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/292/199/580/sukuna-jujutsu-kaisen-yuji-itadori-hd-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/95/627/603/jujutsu-kaisen-fushiguro-toji-weapon-sword-muscles-hd-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/267/750/534/jujutsu-kaisen-anime-boys-hd-wallpaper-preview.jpg'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {images.map((src, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
};

export default Carousel;
