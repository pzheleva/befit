export default function Schedule() {

    return(
        <>
  <div className="pricing-plan-bg page-head parallax overlay">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
            <h3>SCHEDULE</h3>
          </div>
        </div>
        {/* /.colour-service-1*/}
        {/* <div className="col-md-12">
          <ol className="breadcrumb">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>।</li>
            <li>SCHEDULE</li>
          </ol>
        </div> */}
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </div>
  {/* /.page-header */}
  {/* page title & breadcrumbs end */}
  {/*schedule-area start*/}
  <div className="schedule-area parallax pad90">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
            <div className="title-bar full-width mb20">
              <img src="assets/images/logo/ttl-bar.png" alt="title-img" />
            </div>
            <h3>class schedule</h3>
            <p>make yourself stronger than your excuses</p>
          </div>
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      <div className="row">
        <div className="col-md-12">
          <ul id="tabsJustified" className="nav nav-tabs schdl-tab-area">
            <li className="nav-item full-width">
              <a
                href=""
                data-target="#level1"
                data-toggle="tab"
                className="nav-link small text-uppercase active"
              >
                monday{" "}
              </a>
            </li>
            <li className="nav-item full-width">
              <a
                href=""
                data-target="#level2"
                data-toggle="tab"
                className="nav-link small text-uppercase "
              >
                tuesday
              </a>
            </li>
            <li className="nav-item full-width">
              <a
                href=""
                data-target="#level3"
                data-toggle="tab"
                className="nav-link small text-uppercase "
              >
                wednesday
              </a>
            </li>
            <li className="nav-item full-width">
              <a
                href=""
                data-target="#level4"
                data-toggle="tab"
                className="nav-link small text-uppercase "
              >
                thursday
              </a>
            </li>
            <li className="nav-item full-width">
              <a
                href=""
                data-target="#level5"
                data-toggle="tab"
                className="nav-link small text-uppercase "
              >
                friday
              </a>
            </li>
            <li className="nav-item full-width">
              <a
                href=""
                data-target="#level6"
                data-toggle="tab"
                className="nav-link small text-uppercase "
              >
                saturday
              </a>
            </li>
            <li className="nav-item full-width">
              <a
                href=""
                data-target="#level7"
                data-toggle="tab"
                className="nav-link small text-uppercase "
              >
                sunday
              </a>
            </li>
          </ul>
          <div id="tabsJustifiedContent" className="tab-content">
            <div id="level1" className="tab-pane fade active show">
              <div className="schdl-box">
                <h5>boxing</h5>
                <p className="mb-0">06.00 am – 07.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">07.00 am – 08.00am</p>
              </div>
              <div className="schdl-box">
                <h5>bodybuiling</h5>
                <p className="mb-0">08.00 am – 09.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">09.00 am – 10.00am</p>
              </div>
              <div className="schdl-box">
                <h5>crosfit</h5>
                <p className="mb-0">10.00 am – 11.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">1.00 am – 12.00am</p>
              </div>
              <div className="schdl-box">
                <h5>fitness</h5>
                <p className="mb-0">04.00 pm – 05.00pm</p>
              </div>
              <div className="schdl-box">
                <h5>cardio</h5>
                <p className="mb-0">05.00 pm – 06.00pm</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">07.00 pm – 08.00pm</p>
              </div>
              <div className="schdl-box">
                <h5>bodybuiling</h5>
                <p className="mb-0">08.00 pm – 09.00pm</p>
              </div>
            </div>
            <div id="level2" className="tab-pane fade">
              <div className="schdl-box">
                <h5>boxing</h5>
                <p className="mb-0">06.00 am – 07.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">07.00 am – 08.00am</p>
              </div>
              <div className="schdl-box">
                <h5>bodybuiling</h5>
                <p className="mb-0">08.00 am – 09.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">09.00 am – 10.00am</p>
              </div>
              <div className="schdl-box">
                <h5>crosfit</h5>
                <p className="mb-0">10.00 am – 11.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">1.00 am – 12.00am</p>
              </div>
              <div className="schdl-box">
                <h5>fitness</h5>
                <p className="mb-0">04.00 pm – 05.00pm</p>
              </div>
            </div>
            <div id="level3" className="tab-pane fade">
              <div className="schdl-box">
                <h5>boxing</h5>
                <p className="mb-0">06.00 am – 07.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">09.00 am – 10.00am</p>
              </div>
              <div className="schdl-box">
                <h5>crosfit</h5>
                <p className="mb-0">10.00 am – 11.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">1.00 am – 12.00am</p>
              </div>
              <div className="schdl-box">
                <h5>fitness</h5>
                <p className="mb-0">04.00 pm – 05.00pm</p>
              </div>
            </div>
            <div id="level4" className="tab-pane fade">
              <div className="schdl-box">
                <h5>boxing</h5>
                <p className="mb-0">06.00 am – 07.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">07.00 am – 08.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">1.00 am – 12.00am</p>
              </div>
              <div className="schdl-box">
                <h5>fitness</h5>
                <p className="mb-0">04.00 pm – 05.00pm</p>
              </div>
            </div>
            <div id="level5" className="tab-pane fade">
              <div className="schdl-box">
                <h5>boxing</h5>
                <p className="mb-0">06.00 am – 07.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">07.00 am – 08.00am</p>
              </div>
              <div className="schdl-box">
                <h5>bodybuiling</h5>
                <p className="mb-0">08.00 am – 09.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">09.00 am – 10.00am</p>
              </div>
              <div className="schdl-box">
                <h5>crosfit</h5>
                <p className="mb-0">10.00 am – 11.00am</p>
              </div>
            </div>
            <div id="level6" className="tab-pane fade">
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">09.00 am – 10.00am</p>
              </div>
              <div className="schdl-box">
                <h5>crosfit</h5>
                <p className="mb-0">10.00 am – 11.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">1.00 am – 12.00am</p>
              </div>
              <div className="schdl-box">
                <h5>fitness</h5>
                <p className="mb-0">04.00 pm – 05.00pm</p>
              </div>
            </div>
            <div id="level7" className="tab-pane fade">
              <div className="schdl-box">
                <h5>bodybuiling</h5>
                <p className="mb-0">08.00 am – 09.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">09.00 am – 10.00am</p>
              </div>
              <div className="schdl-box">
                <h5>crosfit</h5>
                <p className="mb-0">10.00 am – 11.00am</p>
              </div>
              <div className="schdl-box">
                <h5>-----</h5>
                <p className="mb-0">1.00 am – 12.00am</p>
              </div>
            </div>
          </div>
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      <div className="row">
        <div className="col-md-12">
          <div className="dwnload">
            <a href="#">
              <span>
                <i className="fa fa-download" aria-hidden="true" />
              </span>
              download our full class schedule
            </a>
          </div>
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </div>
  {/*schedule-area end*/}
</>

    )
}