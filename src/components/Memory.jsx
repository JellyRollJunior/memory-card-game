import { useEffect, useState } from 'react';
import { Card } from './Card.jsx';
import { searchGifs } from './memoryAPI.js';
export { Memory };

const Memory = () => {
  const THEME = 'sailor moon';
  const NUM_CARDS = 12;

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    searchGifs(THEME, NUM_CARDS)
      .then((data) => setGifs(data));
  }, []);

  return (
    <>
      <div>
        <div>Score: </div>
        <div>High Score: </div>
      </div>
      <section className="card-holder">
        {gifs.map((gif) => {
          return <Card url={gif.url} title={gif.title} key={gif.url} />;
        })}
      </section>
    </>
  );
};
