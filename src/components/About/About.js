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
                Lorem ipsum dolor sit amet, et nulla mnesarchum disputationi
                quo, eum suscipit facilisi ea. Sea magna persius saperet ne,
                nonumy nemore et duo, te quis graece scaevola nec. Cu denique
                phaedrum pertinacia sed. Iisque latine labitur his ex, porro
                vivendum no qui. uem epicuri qualisque et sea.
              </p>{" "}
              <br />
              <p>
                Sit repudiandae contentiones eu, an atqui interesset usu, usu ad
                appareat tacimates platonem. In eum eleifend intellegam, mucius
                labores assueverit vel ne. An nam viris option. Cum no eruditi
                albucius, quo eros lucilius dissentiet et. Duo facer reprimique
                in repudiandae contentiones eu, an atqui interesset usu, usu ad
                appareat tacimates platonem.{" "}
              </p>
            </div>
            <div className="about-benefit mt50">
              <a href="#">
                <span>
                  <i className="fa fa fa-stop-circle" />
                </span>
                professional trainer :
              </a>
              <p>
                Duis bonorum theophrastus ad sea. In tation ea affert sadipscing
                soluta usu, et eos legimus expetenda consectetuer, nec ad tation
                doctus.
              </p>
            </div>
            <div className="about-benefit mt30">
              <a href="#">
                <span>
                  <i className="fa fa fa-stop-circle" />
                </span>
                multiple classromm :
              </a>
              <p>
                Duis bonorum theophrastus ad sea. In tation ea affert sadipscing
                soluta usu, et eos legimus expetenda consectetuer, nec ad tation
                doctus.
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
                Duis bonorum theophrastus ad sea. In tation ea affert sadipscing
                soluta usu, et eos legimus expetenda consectetuer, nec ad tation
                doctus.
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
                  monday to fiday <span>07.00 - 17.00</span>
                </li>
                <li>
                  saturday <span>07.00 - 14.00</span>
                </li>
                <li>
                  sunday<span>weekend</span>
                </li>
              </ul>
            </div>
            <div className="opening-img">
              <img src="assets/images/about/1.jpg" alt="About Img" />
              <div className="about-nd">
                <h5>mr.olympia</h5>
                <p>24-8-2017</p>
              </div>
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