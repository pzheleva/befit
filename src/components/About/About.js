export default function About() {

    return(
        <>
  <div className="about-area pad90">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
            <div className="title-bar full-width mb20">
              <img src="assets/images/logo/ttl-bar.png" alt="title-img" />
            </div>
            <h3>welcome to befit</h3>
            <p>push harder than yesterday if you want a different tommorrow </p>
          </div>
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className="aboutus-box">
            <div className="about-desc">
              <p>
              A healthy lifestyle is important for everyone. When we look after our physical health, we feel better too – fitter, more relaxed and better able to cope with things. This is especially important when you have a mental illness.
              </p>{" "}
              <br />
              <p>
              ‘Healthy living’ means maintaining a healthy lifestyle and introducing habits that improve your health. It can be difficult to change old habits, but there are steps you can take to become healthier. An important first step is identifying less healthy habits and learning new, positive ones to replace them.
              We are here to help you!{" "}
              </p>
            </div>
            <div className="about-benefit mt50">
              <a href="#">
                <span>
                  <i className="fa fa fa-stop-circle" />
                </span>
                professional trainers :
              </a>
              <p>
                Our team is here to help you through your journey and answer all your questions.
              </p>
            </div>
            <div className="about-benefit mt30">
              <a href="#">
                <span>
                  <i className="fa fa fa-stop-circle" />
                </span>
                multiple classrooms :
              </a>
              <p>
                With more then 20 classrooms there is enough space to practice almost every physical activity you want.
              </p>
            </div>
            <div className="about-benefit mt30">
              <a href="#">
                <span>
                  <i className="fa fa fa-stop-circle" />
                </span>
                equipment :
              </a>
              <p>
              Stay fit with our range of gym equipment such as weights, dumbbells, treadmills, yoga balls, medicine balls & more.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="about-opening">
            <div className="opening-hours">
              <h3>opening hours</h3>
              <ul>
                <li>
                  monday to fiday <span>07.00 - 20.00</span>
                </li>
                <li>
                  saturday <span>07.00 - 18.00</span>
                </li>
                <li>
                  sunday<span>07.00 - 18.00</span>
                </li>
              </ul>
            </div>
            <div className="opening-img">
              <img src="http://img1.wsimg.com/isteam/ip/4549b023-2b89-44a1-bfde-d3b05b6ca0c7/0335e425c45b5ef236bd98974173b841.jpg" alt="About Img" />
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* about-area end*/}
</>

    )
}