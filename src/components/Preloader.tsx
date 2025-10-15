import type { JSX } from "react";
import logo from "../assets/images/face-look.png";

type PreloaderProps = {
  message?: string;
};

export default function Preloader({
  message = "Loading....",
}: PreloaderProps): JSX.Element {
  return (
    <div
      className="preloader-overlay"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="preloader-inner">
        {/* Logo */}
        <img
          src={logo}
          alt="Facelook logo"
          className="preloader-logo"
          data-preloader-ignore
        />

        {/* Optical SVG animation */}
        <svg
          className="optical-loader"
          viewBox="0 0 100 100"
          width="96"
          height="96"
          aria-hidden="true"
          focusable="false"
        >
          {/* background rings */}
          <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#e5e7eb" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#e5e7eb" strokeWidth="2" />

          {/* animated rings */}
          <g>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="8 10"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </g>
          <g>
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="6 8"
              opacity="0.85"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="-360 50 50"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </g>
          <g>
            <circle
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="4 6"
              opacity="0.7"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </g>
          {/* pupil pulse */}
          <circle cx="50" cy="50" r="4" fill="#000000">
            <animate attributeName="r" values="3;5;3" dur="1.4s" repeatCount="indefinite" />
            <animate
              attributeName="opacity"
              values="1;0.6;1"
              dur="1.4s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* Message */}
        <p className="preloader-message">{message}</p>
      </div>
    </div>
  );
}
