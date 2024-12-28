import prettyGuardianLogo from './../assets/pretty-guardian-logo.png'
export { Card };

const Card = () => {
  return (
    <div className="card">
      <img src={prettyGuardianLogo} alt="" />
      <h3>Name</h3>
    </div>
  );
};


