import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: auto;
  transform-style: preserve-3d;
  animation: rotate 20s infinite linear;
  perspective: 1000px;

  @keyframes rotate {
    from {
      transform: rotateX(-15deg) rotateY(0deg) rotateZ(10deg);
    }
    to {
      transform: rotateX(-15deg) rotateY(360deg) rotateZ(10deg);
    }
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center center;
    transform-style: preserve-3d;
    font-size: 1.2rem;
    font-weight: bold;
    color: whitesmoke;
    text-shadow: 0 0 2px #000;
  }
`;

const SpinningText = () => {
    const circleRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        const text = circle.dataset.text;
        const characters = text.split('');
        const varyAngle = 360 / characters.length;
        const radius = 180;

        characters.forEach((character, index) => {
            const span = document.createElement('span');
            span.innerText = character;

            const rotateY = `rotateY(${index * varyAngle}deg)`;
            const translateZ = `translateZ(${radius}px)`;
            span.style.transform = `${rotateY} ${translateZ}`;

            circle.appendChild(span);
        });
    }, []);

    return (
        <Circle ref={circleRef} data-text="Smart Transcripts by BlokEDU " />
    );
};

export default SpinningText;
