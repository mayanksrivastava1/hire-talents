import React from 'react'
import './css/Main-section.css'
export default function Main_section() {
  return (
    <div>
      <div class="hero-section app-hero" style={{"backgroundImage": "url(https://d383au3bye3rv1.cloudfront.net/static/images/optimized/sky.jpg)"}}>
            <div class="container">
                <div class="hero-content app-hero-content text-center">

                    <div class="row justify-content-md-center">
                        <div class="col-md-12">
                            <h1>Find your next top tech<br class="d-block d-md-none" /> job in 1 week.</h1>
                            <p class="">
                                <span class="yellow-highlight">Are you a top 2%</span> Software Engineer, Product
                                Manager or Data Scientist? <br class="d-none d-md-block" />Let leading Indian technology
                                <span class="yellow-highlight"> companies compete to hire you.</span>
                            </p>
                            <br class="d-block d-md-none" />
                            <br class="d-block d-md-none" />
                            <a class="btn btn-primary btn-lg" style={{marginTop: "20px"}} href="/candidate/signup">Apply to join</a>
                        </div>
                    </div>
                </div>


                <div class="services-section text-center" id="services">
                    <div class="container" style={{marginTop: "-30px"}}>
                        <div class="row  justify-content-md-center">
                            <div class="col-md-8">

                            </div>
                            <div class="col-md-12 text-center">
                                <div class="services">
                                    <div class="row">
                                        <div class="col-sm-4 wow fadeInUp" data-wow-delay="0.2s">
                                            <div class="services-icon">
                                                <img class="" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png" height="60" width="60" alt="Service" />
                                            </div>
                                            <div class="services-description">
                                                <h1>Step 1: Complete Profile</h1>
                                                <p>
                                                    Once you are approved, we showcase you to leading Indian technology
                                                    startups
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
                                            <div class="services-icon">
                                                <img class="icon-2" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png" height="60" width="60" alt="Service" />
                                            </div>
                                            <div class="services-description">
                                                <h1>Step 2: Receive Job Offers</h1>
                                                <p>
                                                    Companies start sending interview requests. Talk to only the ones
                                                    you like.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 wow fadeInUp" data-wow-delay="0.4s">
                                            <div class="services-icon">
                                                <img class="icon-3" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png" data-src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png" height="60" width="60" alt="Service" />
                                            </div>
                                            <div class="services-description">
                                                <h1>Step 3: Accept Dream Job</h1>
                                                <p>
                                                    Compare your offers and accept the best one. Hired! Lorem, ipsum. Lorem, ipsum dolor.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
