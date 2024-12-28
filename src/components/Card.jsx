export { Card };

const Card = ({url, title}) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};


