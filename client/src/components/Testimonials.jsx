import React from 'react';

const Testimonials = () => {
  return (
    <div class="reveiw containers">
        <div className='testimonial-heading'>
            <h3>TESTIMONIALS</h3>
            <p>See What Our User Says</p>
        </div>

        <div className="testimonials">
        <div class="card">
        <div class="layer"></div>
        <div class="content">
            <p>
            I knew I wanted to start something of my own but wasn't sure what. Met a tonne of great people on the platform with great ideas and have decided to embark on a new venture with one of them! Would highly recommend to anyone in the same position!</p>
                <div className="image">
                    <img src="./img/darshan-patel-QJEVpydulGs-unsplash.jpg" alt="" height="100%" width="80%" />
                </div>
                <div className="details">
                    <h2>Darshan patel<br/><span>Marketer</span></h2>
                </div>
        </div>
    </div>
    <div className="card">
        <div className="layer"></div>
        <div className="content">
            <p>
            What I lacked the most in business was sales and business development skills. Through StartHawk I managed to find a co-founder with a wealth of experience in SAAS sales which meant I could focus on what I do best - product development</p>
                <div className="image">
                    <img src="./img/juan-encalada-WC7KIHo13Fc-unsplash.jpg" alt="" height="100%" width="80%" />
                </div>
                <div className="details">
                    <h2>Juan encalada<br/><span>Website Designer</span></h2>
                </div>
        </div>
    </div>
    <div className="card">
        <div className="layer"></div>
        <div className="content">
            <p>
            Was delighted to find my co-founder on StartHawk - its made the whole process of getting external investment a lot easier along with getting my product to MVP sooner than expected.</p>
                <div className="image">
                    <img src="./img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="" height="90%" width="100%" />
                </div>
                <div className="details">
                    <h2>Christopher<br/><span>Sales</span></h2>
                </div>
        </div>
    </div>
    
</div>
</div>


  )
}

export default Testimonials;