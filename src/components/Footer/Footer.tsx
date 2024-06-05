// import GithubIcon from '../../assets/icons/gh.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <a className="gh" href="https://github.com/irina-mokh" target="_blank" rel="noreferrer">
          {/* <img src={GithubIcon} width={26} className="gh__icon"></img> */}
          irina-mokh
        </a>
        <span className="footer__text">2024</span>
      </div>
    </footer>
  );
};
