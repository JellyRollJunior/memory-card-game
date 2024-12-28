import { useEffect, useState } from 'react';
import { Card } from './Card.jsx';
import { searchGifs } from './memoryAPI.js';
export { Memory };

const Memory = () => {
  const THEME = 'sailor moon';
  const NUM_CARDS = 12;

  const [gifs, setGifs] = useState([]);
  const [clickedGifs, setClickedGifs] = useState(new Set([]));
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    searchGifs(THEME, NUM_CARDS).then((data) => setGifs(data));
  }, []);

  const shuffleGifs = () => {
    const array = gifs;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setGifs(array);
  };

  const handleCardClick = (url) => {
    if (clickedGifs.has(url)) {
      // user has clicked this gif (reset score to 0)
      setClickedGifs(new Set([]));
    } else {
      // increment score
      setClickedGifs(new Set([...clickedGifs, url]));
      if (clickedGifs.size >= highScore) {
        setHighScore(clickedGifs.size + 1);
      }
      // if user score == NUM_CARDS, show victory message
      if (clickedGifs.size + 1 >= NUM_CARDS) {
        alert('You win!');
      }
    }
    shuffleGifs();
  };

  return (
    <main>
      <h1>Memory</h1>
      <div className='score'>
        <div>Score: {clickedGifs.size}</div>
        <div>High Score: {highScore}</div>
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
    </main>
  );
};
