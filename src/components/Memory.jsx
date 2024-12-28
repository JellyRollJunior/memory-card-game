import { Card } from './Card.jsx';
export { Memory };

const Memory = () => {
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
