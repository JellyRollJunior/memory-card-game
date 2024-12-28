import { useEffect, useState } from 'react';
import { Card } from './Card.jsx';
import { searchGifs } from './memoryAPI.js';
import prettyGuardianLogo from './../assets/pretty-guardian-logo.png';
import footerLace from './../assets/footer-bg.png';
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
    <>
      <header>
        <img src={prettyGuardianLogo} alt="" />
      </header>
      <main>
        <div className="wrapper">
          <h1>Sailor Moon Memory</h1>
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
      <footer>
        <div className="lace"></div>
        <div className="footer-content">
          <div className="link-holder">
            <a className="icon-github" href="https://github.com/jellyrolljunior" target="”_blank”"></a>
            <a className="icon-linkedin" href="https://www.linkedin.com/in/jellyrolljunior/" target="”_blank”"></a>
            <a className="icon-instagram" href="https://www.instagram.com/river.flows__" target="”_blank”"></a>
          </div>
          Created by JellyRollJunior (Brandon Lin)
          <br />
          Assets from <a href="https://giphy.com/" target="_blank" rel="noopener noreferrer"
          >Giphy</a> and <a href="https://prettyguardians.com/" target="_blank" rel="noopener noreferrer"
          >PrettyGuardians</a>
        </div>
      </footer>
    </>
  );
};
