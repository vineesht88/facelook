import { useEffect, useRef, useState } from "react";
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import left01 from "../assets/images/banner/l-01.jpg";
import left02 from "../assets/images/banner/l-02.jpg";
import left03 from "../assets/images/banner/l-03.jpg";
import right01 from "../assets/images/banner/r-01.jpg";
import right02 from "../assets/images/banner/r-02.jpg";
import right03 from "../assets/images/banner/r-03.jpg";

const leftImages = [left01, left02, left03];
const rightImages = [right01, right02, right03];

const leftCaptions = [
  { heading: "T", sub: "EYE", sub2: "VISION", sub3: "CHECK" },
    { heading: "T", sub: "EYE", sub2: "VISION", sub3: "CHECK" },
    { heading: "T", sub: "EYE", sub2: "VISION", sub3: "CHECK" },
];

const rightCaptions = [
  { heading: "VISION YOU DESERVE", sub: "Offering you the best service possible" },
  { heading: "VISION YOU DESERVE", sub: "Offering you the best service possible" },
  { heading: "VISION YOU DESERVE", sub: "Offering you the best service possible" },
];

type Props = {
  intervalMs?: number; // autoplay interval (default 4000ms)
};

export default function BannerSlider({ intervalMs = 4000 }: Props) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef<number | null>(null);
  const FADE_MS = 600;

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    window.setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, FADE_MS);
  };

  const next = () => goTo((current + 1) % leftImages.length);
  const prev = () => goTo((current - 1 + leftImages.length) % leftImages.length);

  // Auto-play with cleanup, pause on hover or while animating or when tab hidden
  useEffect(() => {
    const clearTimer = () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    const handleVisibility = () => {
      // Restart or stop when tab visibility changes
      clearTimer();
      if (!document.hidden && !isHovering && !animating) {
        timerRef.current = window.setInterval(next, intervalMs) as unknown as number;
      }
    };

    // start interval if allowed
    if (!isHovering && !animating && !document.hidden) {
      timerRef.current = window.setInterval(next, intervalMs) as unknown as number;
    }

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      clearTimer();
    };
    // Recreate when these change
  }, [current, isHovering, animating, intervalMs]); // current ensures interval keeps sliding through

  return (
    <div
      className="slider-div"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "100%",
        maxWidth: "100vw",
        height: "650px",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* LEFT SIDE */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {leftImages.map((src, i) => (
          <div key={`L-${i}`} className={`fade-layer ${i === current ? "active" : ""}`}>
            <img src={src} alt="" />
            <div className={`caption-box caption-left ${i === current ? "show" : ""}`}>
              <h2>{leftCaptions[i]?.heading}</h2>
              <p className="sub-1 mt-1 tracking-[.35em]">{leftCaptions[i]?.sub}</p>
              <p className="sub-2 mt-1 tracking-[.35em]">{leftCaptions[i]?.sub2}</p>
              <p className="sub-3 mt-1 mb-6 tracking-[.35em]">{leftCaptions[i]?.sub3}</p>
              <Button variant="outlined" className="book-now-btn">BOOK NOW</Button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {rightImages.map((src, i) => (
          <div key={`R-${i}`} className={`fade-layer ${i === current ? "active" : ""}`}>
            <img src={src} alt="" />
            <div className={`caption-box caption-right ${i === current ? "show" : ""}`}>
              <h2>{rightCaptions[i]?.heading}</h2>
              <p className="mb-6">{rightCaptions[i]?.sub}</p>
               <Button variant="outlined" className="fl-primary-btn" >VIEW MORE</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button onClick={prev} disabled={animating} style={btnStyle("left")} aria-label="Previous">
        <NavigateBeforeIcon />
      </button>
      <button onClick={next} disabled={animating} style={btnStyle("right")} aria-label="Next">
        <NavigateNextIcon />
      </button>
    </div>
  );
}

function btnStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    [side]: "10px",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: 40,
    height: 40,
    cursor: "pointer",
    zIndex: 10,
  } as React.CSSProperties;
}
