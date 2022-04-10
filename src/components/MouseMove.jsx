import React, { useEffect, useState } from 'react';

const MouseMove = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  const handleMouseMove = (e) => {
    const screenWidth = window.innerWidth / 2;

    if (coords.x > screenWidth) {
      document.body.style.backgroundColor = 'blue';
    } else {
      document.body.style.backgroundColor = 'red';
    }

    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <h1>
        I'm now on X: {coords.x}, and Y: {coords.y}
      </h1>
    </>
  );
};

export default MouseMove;
