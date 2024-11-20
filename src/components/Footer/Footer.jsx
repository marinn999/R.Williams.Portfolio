const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="both-sides-footer">
          <div className="footer-left">
            <a className="footer-logo-nav" href="./index.html">
              <svg
                className="footer-logotype"
                width="78.429px"
                height="24px"
                aria-label="page logotype"
              >
                <use href="../img/symbol-defs.svg#icon-12"></use>
              </svg>
            </a>
            <div className="footer-icons-div">
              <svg className="footer-icon" width="24" height="24">
                <use href="../img/symbol-defs.svg#icon-Twitter"></use>
              </svg>
              <svg className="footer-icon" width="24" height="24">
                <use href="../img/symbol-defs.svg#icon-Dribbble"></use>
              </svg>
              <svg className="footer-icon" width="24" height="24">
                <use href="../img/symbol-defs.svg#icon-LinkedIn"></use>
              </svg>
            </div>
          </div>
          <div className="footer-right">
            <a href="" className="footer-link">
              Home
            </a>
            <a href="#section-hero" className="footer-link">
              About
            </a>
            <a href="#section-experience" className="footer-link">
              Work
            </a>
            <a href="#section-photo" className="footer-link">
              Process
            </a>
            <a href="" className="footer-link">
              Creator
            </a>
            {/* <-- LINK TO MY CV --> */}
            <a href="https://www.freepik.com" className="footer-link">
              Resource
            </a>
            <a href="README" className="footer-link" target="_blank">
              Read me
            </a>
            {/* <!-- ADD README FILE --> */}
          </div>
        </div>
        <p className="footer-text">
          Not Copyright 2020 • Layout improved by M.Kompel
        </p>
      </footer>
    </>
  );
};

export default Footer;
