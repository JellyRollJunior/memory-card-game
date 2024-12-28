export { Card };

const Card = ({url, title, onClick}) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={url} alt={title} />
    </div>
  );
};


