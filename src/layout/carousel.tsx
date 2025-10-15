import type { JSX } from "react";
import brand01 from "../assets/images/brands/Client-01.png";
import brand02 from "../assets/images/brands/Client-02.png";
import brand03 from "../assets/images/brands/Client-03.png";
import brand04 from "../assets/images/brands/Client-04.png";
import brand05 from "../assets/images/brands/Client-05.png";

const images = [brand01, brand02, brand03, brand04, brand05];
// Duplicate for seamless looping
const loopImages = [...images, ...images];

export default function ImageCarousel(): JSX.Element {
  return (
    <div className="carousel">
      <div className="carousel-track is-animated">
        {loopImages.map((src, idx) => (
          <div className="slide-wrapper" key={`${src}-${idx}`}>
            <img
              src={src}
              alt={`Brand logo ${(idx % images.length) + 1}`}
              className="slide"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
