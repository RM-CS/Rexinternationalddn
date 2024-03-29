import { useState, useEffect } from "react";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);

  const nextSlide = () => {
    if (current === slides.length - 1) {
      setAutoSlideEnabled(true); // Disable automatic sliding after reaching the last slide
    }
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (autoSlideEnabled) {
      const intervalId = setInterval(() => {
        // Automatically go to the next slide after a specified interval
        nextSlide();
      }, 2500);

      // Clear the interval when the component is unmounted or when autoSlideEnabled is set to false
      return () => clearInterval(intervalId);
    } // eslint-disable-next-line
  }, [current, slides.length, autoSlideEnabled]);

  return (
    <div className="overflow-hidden relative h-[80%] z-[-20]">
      <div
        className="flex transition ease-out duration-[1000ms] w-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
        onMouseEnter={() => setAutoSlideEnabled(false)} // Disable auto sliding on hover
        onMouseLeave={() => setAutoSlideEnabled(true)} // Enable auto sliding when not hovering
      >
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`Slide ${index + 1}`}/>
        ))}
      </div>
      
    </div>
  );
}