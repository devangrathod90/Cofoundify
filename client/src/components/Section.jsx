import React from 'react'

const Section = () => {
  return (
    <section className='image-text'>
    <div class="container ">
        <div className='motivation'>
        <div className='testimonial-heading'>
            <h3>OUR MISSION</h3>
        </div>
        <div class="row motivation-box1 ">
            <div class="col-lg-6 col-md-12 col-sm-6 section-text">
                <h3>Discover Your Perfect Co-founder Match</h3>
                <p >Our intuitive platform helps you find the right co-founders with complementary skills
                                 and aligned visions, assisting you in forming<br/> the ultimate startup team.</p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-6 ">
                <img className='section-img' src="./img/austin-distel-wD1LRb9OeEo-unsplash.jpg" alt="" height="350px" width="450px"/>
            </div>
        </div>

        <div class="row  motivation-box2">
            <div class="col-lg-6 col-md-12 col-sm-6 ">
            <img className='section-img' src="./img/airfocus-TQwW-3EynK4-unsplash.jpg" alt=""  height="300px" width="450px"/>

            </div>
            <div class="col-lg-6 col-md-12 col-sm-6 section-text">
            <h3>Attract Investors Who Believe in Your Idea</h3>
            <p>Gain the attention of investors who share your passion and are eager to support your venture, giving your startup the financial boost it needs.</p>
            </div>
        </div>

    </div>
    </div>
</section>

  )
}

export default Section