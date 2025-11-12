"use client";
import React from "react";
import styled from "styled-components";

type StarsProps = {
  size?: number;
};

const Stars: React.FC<StarsProps> = ({ size = 50 }) => {
  return (
    <Loader $size={size}>
      <svg
        id="pegtopone"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
      >
        <defs>
          <filter id="shine">
            <feGaussianBlur stdDeviation="3"></feGaussianBlur>
          </filter>
          <mask id="mask">
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="white"
            ></path>
          </mask>
          <radialGradient
            id="gradient-1"
            cx="50"
            cy="66"
            fx="50"
            fy="66"
            r="30"
            gradientTransform="translate(0 35) scale(1 0.5)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="black" stopOpacity="0.3" />
            <stop offset="50%" stopColor="black" stopOpacity="0.1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g>
          <path
            d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
            fill="currentColor"
          />
          <path
            d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
            fill="url(#gradient-1)"
          />
        </g>
      </svg>

      <svg id="pegtoptwo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <use xlinkHref="#pegtopone" />
      </svg>

      <svg id="pegtopthree" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <use xlinkHref="#pegtopone" />
      </svg>
    </Loader>
  );
};

export default Stars;

const Loader = styled.div<{ $size: number }>`
  --fill-color: #5c3d99;
  --shine-color: #5c3d9933;
  position: relative;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  filter: drop-shadow(0 0 10px var(--shine-color));

  svg {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  svg g path:first-child {
    fill: var(--fill-color);
  }

  #pegtopone {
    animation: flowe-one 1s linear infinite;
  }

  #pegtoptwo {
    opacity: 0;
    transform: scale(0) translateY(-200px) translateX(-100px);
    animation: flowe-two 1s linear infinite;
    animation-delay: 0.3s;
  }

  #pegtopthree {
    opacity: 0;
    transform: scale(0) translateY(-200px) translateX(100px);
    animation: flowe-three 1s linear infinite;
    animation-delay: 0.6s;
  }

  @keyframes flowe-one {
    0% {
      transform: scale(0.5) translateY(-200px);
      opacity: 0;
    }
    25% {
      transform: scale(0.75) translateY(-100px);
      opacity: 1;
    }
    50% {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    75% {
      transform: scale(0.5) translateY(50px);
      opacity: 1;
    }
    100% {
      transform: scale(0) translateY(100px);
      opacity: 0;
    }
  }

  @keyframes flowe-two {
    0% {
      transform: scale(0.5) rotateZ(-10deg) translateY(-200px) translateX(-100px);
      opacity: 0;
    }
    25% {
      transform: scale(1) rotateZ(-5deg) translateY(-100px) translateX(-50px);
      opacity: 1;
    }
    50% {
      transform: scale(1) rotateZ(0deg) translateY(0) translateX(-25px);
      opacity: 1;
    }
    75% {
      transform: scale(0.5) rotateZ(5deg) translateY(50px) translateX(0);
      opacity: 1;
    }
    100% {
      transform: scale(0) rotateZ(10deg) translateY(100px) translateX(25px);
      opacity: 0;
    }
  }

  @keyframes flowe-three {
    0% {
      transform: scale(0.5) rotateZ(10deg) translateY(-200px) translateX(100px);
      opacity: 0;
    }
    25% {
      transform: scale(1) rotateZ(5deg) translateY(-100px) translateX(50px);
      opacity: 1;
    }
    50% {
      transform: scale(1) rotateZ(0deg) translateY(0) translateX(25px);
      opacity: 1;
    }
    75% {
      transform: scale(0.5) rotateZ(-5deg) translateY(50px) translateX(0);
      opacity: 1;
    }
    100% {
      transform: scale(0) rotateZ(-10deg) translateY(100px) translateX(-25px);
      opacity: 0;
    }
  }
`;
