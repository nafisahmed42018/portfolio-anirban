import React from "react";

type StyleProps = {
  styleProps: string;
};

const TestimonialQuote = ({ styleProps }: StyleProps) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styleProps}`}
    >
      <g opacity="0.2" filter="url(#filter0_i_906_88)">
        <path
          d="M58.3334 54.1667H75C76.1051 54.1667 77.1649 54.6057 77.9463 55.3871C78.7277 56.1685 79.1667 57.2283 79.1667 58.3333V70.8333C79.1667 71.9384 78.7277 72.9982 77.9463 73.7796C77.1649 74.561 76.1051 75 75 75H62.5C61.395 75 60.3351 74.561 59.5537 73.7796C58.7723 72.9982 58.3334 71.9384 58.3334 70.8333V45.8333C58.3334 34.7208 63.8875 27.7792 75 25M20.8333 54.1667L37.5 54.1667C38.6051 54.1667 39.6649 54.6057 40.4463 55.3871C41.2277 56.1685 41.6667 57.2283 41.6667 58.3333V70.8333C41.6667 71.9384 41.2277 72.9982 40.4463 73.7796C39.6649 74.561 38.6051 75 37.5 75H25C23.8949 75 22.8351 74.561 22.0537 73.7796C21.2723 72.9982 20.8333 71.9384 20.8333 70.8333L20.8333 45.8333C20.8333 34.7208 26.3875 27.7792 37.5 25"
          stroke="#BAD7AA"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="22.0588"
          y="55.4043"
          width="19.1176"
          height="19.1176"
          fill="#BAD7AA"
        />
        <rect
          x="58.8235"
          y="55.4043"
          width="19.1176"
          height="19.1176"
          fill="#BAD7AA"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_906_88"
          x="0"
          y="0"
          width="100"
          height="104"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_906_88"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default TestimonialQuote;
