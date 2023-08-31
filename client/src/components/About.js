import React from "react";
import AboutCSS from "./About.module.css";

const About = () => {
  return (
    <section id="About">
      <div class={AboutCSS.header}>
        <h1>ABOUT US</h1>
      </div>
      <section class={AboutCSS.section}>
        <div class="container">
          <div class={AboutCSS.feature}>
            <img
              src="./img/About/mission.png"
              alt="Our Mission"
              height="140px"
              width="140px"
            />
            <div class={AboutCSS.feature_text}>
              <h2>Our Mission</h2>
              <p>
                We're on a mission to connect visionaries, creators, and
                innovators from around the world. Together, we're shaping the
                future of industries and pushing boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class={AboutCSS.section}>
        <div class="container">
          <div class={AboutCSS.feature}>
            <img
              src="./img/About/vision.png"
              alt="Our Values"
              height="140px"
              width="140px"
            />
            <div class={AboutCSS.feature_text}>
              <h2>Our Values</h2>
              <p>
                Transparency, collaboration, and excellence are at the core of
                everything we do. We believe in empowering individuals to
                transform ideas into impactful ventures.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class={AboutCSS.section}>
        <div class="container">
          <div class={AboutCSS.feature}>
            <img
              src="./img/About/community.gif"
              alt="Our Community"
              height="140px"
              width="140px"
            />
            <div class={AboutCSS.feature_text}>
              <h2>Our Community</h2>
              <p>
                Co-Founder Connect is more than a platform—it's a community
                where passionate minds converge. Share experiences, learn from
                each other, and embark on transformative journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h1>Technologies WE USE</h1>
        </div>
        <div class="container">
          <div class="row container">
            <br />
            <br />
            <div class="col-md-2 col-sm-4">
              <img src="./img/About/icons/html.png" alt="" />
            </div>
            <div class="col-md-2 col-sm-4">
              <img src="./img/About/icons/css3.png" alt="" />
            </div>
            <div class="col-md-2 col-sm-4">
              <img src="./img/About/icons/javascript.png" alt="" />
            </div>
            <div class="col-md-2 col-sm-4">
              <img src="./img/About/icons/bootstrap.png" alt="" />
            </div>
            <div class="col-md-2 col-sm-4">
              <img src="./img/About/icons/express.png" alt="" />
            </div>
            <div class="col-md-2 col-sm-4">
              <img src="./img/About/icons/node.png" alt="" />
            </div>
          </div>

          <div className="row container ">
            <div class="col-md-2 col-sm-4">
              <img
                className={AboutCSS.row2}
                src="./img/About/icons/mongodb.png"
                alt=""
              />
            </div>
            <div class="col-md-2 col-sm-4">
              <img
                className={AboutCSS.row2}
                src="./img/About/icons/firebase.png"
                alt=""
                height="80px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={(AboutCSS.team_section, AboutCSS.section)}>
        <div class="container">
          <h1>Meet Our Team</h1>

          <div className="row">
            <div className="col-md-6">
              <div class={AboutCSS.team_member}>
                <img src="./img/About/team/devang.jpeg" alt="Team Member 1" />
                <div class={AboutCSS.team_member_details}>
                  <h3>DEVANG RATHOD</h3>
                  <p>CEO</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class={AboutCSS.team_member}>
                <img src="./img/About/team/ritik.jpeg" alt="Team Member 2" />
                <div class={AboutCSS.team_member_details}>
                  <h3>RITIK KUMAR</h3>
                  <p>Co-Founder & CTO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class={(AboutCSS.email_section)}>
          <h1>Stay Connected</h1>
        <div class="container">
          <div className={AboutCSS.contact_box}>
            
          <p>Subscribe to our newsletter for the latest updates and news.</p>
          <div class={AboutCSS.email_form}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          </div>

        </div>
      </section>
    </section>
  );
};

export default About;
