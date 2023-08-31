

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg   ">
      <a href="/"><img style={{ width: "200px", marginLeft: "2rem" }} src="./img/logo.png" alt="coFinder"/></a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto nav-text">
          <li className="nav-item active"><a className="nav-link" href="#">Find a co-founder</a></li>
          <li className="nav-item">
            <a className="nav-link" href="blog">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Investers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="About">
              About
            </a>
          </li>
          <li className="nav-item " style={{ marginLeft: "2rem" }}>
            <a id="button" className="nav-link " href="signup">
              Sign up
            </a>
          </li>
          <li className="nav-item ">
            <a id="button" className="nav-link" href="login">
              Log in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

