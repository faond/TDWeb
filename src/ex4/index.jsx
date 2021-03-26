import React, { useEffect, useState } from 'react';
import './ex4.css';
import Hero from './Hero';

const display = (array) => (
  <>
    <h1>Heroes :</h1>
    <div className="heroes_container">
      {
        array.map(
          (c) => <Hero name={c.name} powerstats={c.powerstats} images={c.images} />,
        )
      }
    </div>
  </>
);

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  return (
    <main>
      {display(superheroes)}
    </main>
  );
};
