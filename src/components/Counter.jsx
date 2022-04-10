import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.addEventListener('mousedown', incrementCount);
    return () => {
      document.removeEventListener('mousedown', incrementCount);
    };
  });

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

export default Counter;
