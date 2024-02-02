import React, { useState, useMemo, useCallback } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  const squaredValue = useMemo(() => {
    console.log('Вычисление квадрата значения...');
    return count * count;
  }, [count]);
  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);
  return (
      <div>
        <p>Текущее значение: {count}</p>
        <p>Квадрат значения: {squaredValue}</p>
        <button onClick={handleIncrement}>Увеличить</button>
      </div>
  );
};
export default ExampleComponent;
