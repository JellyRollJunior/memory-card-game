import { useEffect, useState } from 'react';
import { Card } from './Card.jsx';
import { Footer } from './Footer.jsx';
import { searchGifs } from './memoryAPI.js';
import prettyGuardianLogo from './../assets/pretty-guardian-logo.png';
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

  const displayWinModal = () => {
    document.querySelector('.win-modal').classList.add('visible');
  };

  const closeWinModal = () => {
    document.querySelector('.win-modal').classList.remove('visible');
  }

  const handleCardClick = (url) => {
    if (clickedGifs.has(url)) {
      // user has clicked this gif (reset score to 0)
      setClickedGifs(new Set([]));
    } else {
      // user has clicked a new gif - increment score
      setClickedGifs(new Set([...clickedGifs, url]));
      if (clickedGifs.size >= highScore) {
        setHighScore(clickedGifs.size + 1);
      }
      // if user score == NUM_CARDS, show victory message
      if (clickedGifs.size + 1 >= NUM_CARDS) {
        displayWinModal();
      }
    }
    shuffleGifs();
  };

  return (
    <>
      <div className="win-modal">
        <div className='win-card'>
          <button className="close" onClick={closeWinModal}>&times;</button>
          <img src={prettyGuardianLogo} alt="" />
          <div>Congrats, you win! <br /> Wow you have great memory!</div>
        </div>
      </div>
      <header>
        <img src={prettyGuardianLogo} alt="" />
      </header>
      <main>
        <div className="wrapper">
          <h1>Sailor Moon Memory</h1>
          <h3>
            Get points by clicking on an image but don&apos;t click on any more
            than once!
          </h3>
          <div className="score">
            <h2>High Score: {highScore}</h2>
            <h2>Score: {clickedGifs.size}</h2>
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
        </div>
      </main>
      <Footer />
    </>
  );
};
