/* eslint-disable */
import React from 'react';
import Fish from './Fish';

// eslint-disable-next-line import/prefer-default-export
export const ExerciseThreePage = () => {
  const [size, setSize] = React.useState(2);
  return (
    <main>
      <Fish size={size} />
      <button type="submit" onClick={() => setSize(size + 1)}>+</button>
      <button type="submit" onClick={() => setSize(size - 1)}>-</button>
    </main>
  );
};


/* eslint-disable */

