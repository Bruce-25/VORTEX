import './styling/Carousel.css';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: 'images/triforce-from-zelda-cool-logos-7lmmjo3sz4fc9s5l.jpg',
    title: 'Timeless Elegance',
    caption: 'Where fabric meets philosophy.',
  },
  {
    image: 'images/Blackcess.png',
    title: 'Fierce. Bold. Vortex.',
    caption: 'Fashion that speaks in silence.',
  },
  {
    image: 'images/cars1.jpeg',
    title: 'Minimalist Power',
    caption: 'Make your presence louder with less.',
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`carousel-slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="carousel-overlay">
            <h2 className="carousel-title">{slide.title}</h2>
            <p className="carousel-caption">{slide.caption}</p>
          </div>
        </div>
      ))}

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
