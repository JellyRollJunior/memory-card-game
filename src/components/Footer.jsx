export { Footer }; 

const Footer = () => {
    return (
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
          Assets from 
          <a href="https://giphy.com/" target="_blank" rel="noopener noreferrer"
          >Giphy</a>
          {' and '}
          <a href="https://prettyguardians.com/" target="_blank" rel="noopener noreferrer"
          >PrettyGuardians</a>
        </div>
      </footer>
    );
};