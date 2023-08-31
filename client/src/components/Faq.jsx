import React from "react";

const Faq = () => {
  return (
    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-6">
        <img className="faq-image" src="./img/faq.png" alt="" height="400px" width="400px"/>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-6">
      <section class="faq">
          <h1>Frequently Asked Questions</h1>

          <div class="faq-container">
            <details class="faq-box" open>
              <summary class="faq-header">How does the process work?</summary>
              <div class="faq-content">
                <p>
                  Our platform connects you with potential co-founders and
                  investors based on your preferences and needs. Create a
                  profile, start browsing, and get ready to build your dream
                  team.
                </p>
              </div>
            </details>

            <details class="faq-box">
              <summary class="faq-header">How do I find investors?</summary>
              <div class="faq-content">
                <p>
                  When creating your profile, select “Find Investors” to ensure
                  visibility to potential investors and explore opportunities
                  that match your startup’s needs.
                </p>
              </div>
            </details>

            <details class="faq-box">
              <summary class="faq-header">Is it free to use?</summary>
              <div class="faq-content">
                <p>
                  Yes, for a limited time, our platform is completely free to
                  use, but we will be launching subscription plans soon. Get
                  started now!
                </p>
              </div>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faq;
