import React from "react";

const Info = () => {
  return (
    <section className="steps">
      <div id="info"  class="container info-box">
        <div className="info-heading">
          <h1 className="info-main-heading">Co-founder matching</h1>
          <p>
          Empower your startup journey with our co-founder matching platform. <br/>
          Connect with passionate entrepreneurs who share your vision and bring your ideas to life.<br/>
          Together, build a foundation for success and conquer new frontiers in the business world.<br/>
          </p>
          {/* <a href="#">Find your cofounder match now -> </a> */}
        </div>
        
        <div className="info-point-heading">
          <h3>Steps to build your dream team</h3>

          <div class="container" >
            <div class="row points">
              <div class=" col-lg-4 col-md-12 col-sm-6">
                <ul><b>1.</b></ul>
                <ul>Create Profile</ul>
                <p>Tell us about your strengths as a team member. If you have an idea add a startup-job.</p>

              </div>
              <div class="col-lg-4 col-md-12 col-sm-6">
                <ul><b>2.</b></ul>
                <ul>Like Proposals</ul>
                <p>Your profile information guides us to present you with relevant projects or team members that match your aspirations</p>
                

              </div>
              <div class=" col-lg-4 col-md-12 col-sm-6">
                <ul><b>3.</b></ul>
                <ul>It's a Match</ul>
                <p>Get notified about matches and start writing messages before meeting in-person.</p>
              </div>
            </div> 
          </div>


        </div>
      </div>
    </section>
  );
};

export default Info;
