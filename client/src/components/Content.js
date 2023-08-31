function Content() {
  return (
    <section class="hero">
      <div class="container">
        <div class="row hero-box">
          <div class="col-lg-4 col-md-12 col-sm-6" className="hero-textbox">
            <h1 className="Main-Heading">Find Your Startup’s Missing Pieces<img className="favicon" src="./img/rocket.png" alt="" /></h1>
            <p className="hero-para">Unlock endless possibilities with the right co-founder<br/>by your side, and conquer the business world together.</p>
            <a href="/signup" class="btn btn-primary">Free Sign-Up</a>
            <div class="row hero-textbox2">
              <div class="secondary-text col-lg-4 col-md-12 col-sm-6">
                <h5>COFOUNDER HUB<img className="favicon2" src="./img/shared.png" alt="" /></h5>
                <p>Find your perfect partner based on interests, skills and location.</p>
              </div>
              <div class="secondary-text col-lg-6 col-md-12 col-sm-6">
                <h5>GET FUNDED<img className="favicon" src="./img/money.png" alt="" /></h5>
                <p>Learn how to pitch and find investors to fund your Startup.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-6">
            <img src="./img/main_PAGE.png" alt="" width="130%" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;

