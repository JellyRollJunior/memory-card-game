import { useEffect, useState } from 'react';
import { Card } from './Card.jsx';
import { searchGifs } from './memoryAPI.js';
export { Memory };

const Memory = () => {
  const THEME = 'sailor moon';
  const NUM_CARDS = 12;

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const gifsData = searchGifs(THEME, NUM_CARDS);
    setGifs(gifsData);
  }, [])

  console.log(gifs);
  
  return (
    <>
      <div>
        <div>Score: </div>
        <div>High Score: </div>
      </div>
      <section className="card-holder">
        <Card></Card>
      </section>
    </>
  );
};
