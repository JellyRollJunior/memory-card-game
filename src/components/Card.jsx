export { Card };

const Card = ({url, title, onClick}) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={url} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};


