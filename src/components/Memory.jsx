import { useEffect, useState } from 'react';
import { Card } from './Card.jsx';
import { searchGifs } from './memoryAPI.js';
export { Memory };

const Memory = () => {
  const THEME = 'sailor moon';
  const NUM_CARDS = 12;

  const [gifs, setGifs] = useState([]);
  const [clickedGifs, setClickedGifs] = useState(new Set([]));

  useEffect(() => {
    searchGifs(THEME, NUM_CARDS).then((data) => setGifs(data));
  }, []);

  const handleCardClick = (url) => {
    if (clickedGifs.has(url)) {
      // user has clicked this gif (reset score to 0)
      setClickedGifs(new Set([]));
    } else {
      setClickedGifs(new Set([...clickedGifs, url]));
    }
  };

  return (
    <>
      <div>
        <div>Score: {clickedGifs.size}</div>
        <div>High Score: </div>
      </div>
      <section className="card-holder">
        {gifs.map((gif) => {
          return (
            <Card
              url={gif.url}
              title={gif.title}
              key={gif.url}
              onClick={() => handleCardClick(gif.url)}
            />
          );
        })}
      </section>
    </>
  );
};
