import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";




const Home = () => {

  const location = useLocation();
  const [count, setCount] = useState(0);
  
  // useEffect(() => {
  //     // execute on location change
  //     setCount(count + 1);
  //     console.log('Location changed!', location.pathname);
  //     const asd = document.querySelector(".preloader");
  //     if(asd){
  //     asd.style.display = "none";
  //     }
  // }, [location]);




    return (
        <>
        <div >
  <div className="preloader">
    <div className="ball ball-1">
    </div>
    <div className="ball ball-2" />
    <div className="ball ball-3" />
  </div>
  {/*preloader*/}
  <div className="main-container">
    {/* /.header start */}
      {<Header/>}
    {/*header end*/}
    {/* Slider Area Start Here*/}
    <div className="slider-area1">
      <div id="rev_slider_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="photography1" style={{backgroundColor: 'transparent', padding: '0px'}}>
        <div id="rev_slider_1" className="rev_slider fullscreenbanner" style={{display: 'none'}} data-version="5.0.7">
          <ul>
            {/* SLIDE  */}
            <li data-index="rs-1" data-transition="slideoververtical">
              {/* MAIN IMAGE */}
              <img src="/assets/images/slider-show/woman1.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
              {/* LAYER NR. 1 */}
              <div className="tp-caption slide-text-one tp-resizeme" id="slide-1-layer-1" data-x="['right','center','center','center']" data-hoffset="['65','100','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-100','-145','-60','-100']" data-fontsize="['inherit','20','20','17']" data-lineheight="['60','30','30','26']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:right;y:0;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={500} data-splitin="none" data-splitout="none" data-responsive_offset="on" style={{zIndex: 5, whiteSpace: 'nowrap', fontFamily: '"Roboto Condensed", sans-serif'}}>
                <h1>muscle <span>power</span></h1>
              </div>
              {/* LAYER NR. 2 */}
              <div className="tp-caption slide-text-two tp-resizeme" id="slide-1-layer-2" data-x="['right','left','center','center']" data-hoffset="['65','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-0','-80','30','0']" data-fontsize="['60','60','60','30']" data-lineheight="['60','60','60','40']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2300;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:right;y:0;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={750} data-splitin="none" data-splitout="none" data-responsive_offset="on" style={{zIndex: 6, whiteSpace: 'nowrap', fontFamily: '"Roboto Condensed", sans-serif'}}>
                <h1>fitness is not a destination it is a way of life</h1>
              </div>
              {/* LAYER NR. 3 */}
              <div className="tp-caption rev-btn white-btn" id="slide-1-layer-4" data-x="['right','left','center','center']" data-hoffset="['65','0','0','0']" data-y="['middle','middle','bottom','bottom']" data-voffset="['100','160','320','200']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power3.easeOut;" data-style_hover="c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);" data-transform_in="y:bottom;s:1200;e:Power4.easeInOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-start={1250} data-splitin="none" data-splitout="none" data-actions="[{&quot;event&quot;:&quot;click&quot;,&quot;action&quot;:&quot;jumptoslide&quot;,&quot;slide&quot;:&quot;rs-164&quot;,&quot;delay&quot;:&quot;&quot;}]" data-responsive_offset="on" data-responsive="off" style={{zIndex: 8, whiteSpace: 'nowrap', fontSize: '18px', lineHeight: '15px', color: 'rgba(255, 255, 255, 1.00)', fontFamily: '"Roboto Condensed", sans-serif', textTransform: 'uppercase'}}>learn more
              </div>
            </li>
            {/* SLIDE  2*/}
            <li data-index="rs-2" data-transition="slideoververtical">
              {/* MAIN IMAGE */}
              <img src="/assets/images/slider-show/s-5.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
              {/* LAYER NR. 1 */}
              <div className="tp-caption slide-text-one tp-resizeme" id="slide-2-layer-1" data-x="['left','center','center','center']" data-hoffset="['65','100','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-100','-145','-60','-100']" data-fontsize="['inherit','20','20','17']" data-lineheight="['60','30','30','26']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:-250px;y:0;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={500} data-splitin="none" data-splitout="none" data-responsive_offset="on" style={{zIndex: 5, whiteSpace: 'nowrap', fontFamily: '"Roboto Condensed", sans-serif'}}>
                <h1>goal <span>digger</span></h1>
              </div>
              {/* LAYER NR. 2 */}
              <div className="tp-caption slide-text-two tp-resizeme" id="slide-2-layer-2" data-x="['left','left','center','center']" data-hoffset="['65','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-0','-80','30','0']" data-fontsize="['60','60','60','30']" data-lineheight="['60','60','60','40']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2300;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:-250px;y:0;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={750} data-splitin="none" data-splitout="none" data-responsive_offset="on" style={{zIndex: 6, whiteSpace: 'nowrap', fontFamily: '"Roboto Condensed", sans-serif'}}>
                <h1>fitness is not a destination it is a way of life</h1>
              </div>
              {/* LAYER NR. 3 */}
              <div className="tp-caption rev-btn white-btn" id="slide-2-layer-4" data-x="['left','left','center','center']" data-hoffset="['65','0','0','0']" data-y="['middle','middle','bottom','bottom']" data-voffset="['100','160','320','200']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power3.easeOut;" data-style_hover="c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);" data-transform_in="y:bottom;s:1200;e:Power4.easeInOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-start={1250} data-splitin="none" data-splitout="none" data-actions="[{&quot;event&quot;:&quot;click&quot;,&quot;action&quot;:&quot;jumptoslide&quot;,&quot;slide&quot;:&quot;rs-164&quot;,&quot;delay&quot;:&quot;&quot;}]" data-responsive_offset="on" data-responsive="off" style={{zIndex: 8, whiteSpace: 'nowrap', fontSize: '18px', lineHeight: '15px', color: 'rgba(255, 255, 255, 1.00)', fontFamily: '"Roboto Condensed", sans-serif', textTransform: 'uppercase'}}>learn more
              </div>
            </li>
            {/* SLIDE  3*/}
            <li data-index="rs-3" data-transition="slideoververtical">
              {/* MAIN IMAGE */}
              <img src="/assets/images/slider-show/s-6.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
              {/* LAYER NR. 1 */}
              <div className="tp-caption slide-text-one tp-resizeme" id="slide-3-layer-1" data-x="['right','center','center','center']" data-hoffset="['65','100','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-100','-145','-60','-100']" data-fontsize="['inherit','20','20','17']" data-lineheight="['60','30','30','26']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:-250px;y:0;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={500} data-splitin="none" data-splitout="none" data-responsive_offset="on" style={{zIndex: 5, whiteSpace: 'nowrap', fontFamily: '"Roboto Condensed", sans-serif'}}>
                <h1>befit <span>strong</span></h1>
              </div>
              {/* LAYER NR. 2 */}
              <div className="tp-caption slide-text-two tp-resizeme" id="slide-3-layer-2" data-x="['right','left','center','center']" data-hoffset="['65','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-0','-80','30','0']" data-fontsize="['60','60','60','30']" data-lineheight="['60','60','60','40']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2300;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:-200px;y:0;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={750} data-splitin="none" data-splitout="none" data-responsive_offset="on" style={{zIndex: 6, whiteSpace: 'nowrap', fontFamily: '"Roboto Condensed", sans-serif'}}>
                <h1>it never gets easier. You just get strong</h1>
              </div>
              {/* LAYER NR. 3 */}
              <div className="tp-caption rev-btn white-btn" id="slide-3-layer-4" data-x="['right','left','center','center']" data-hoffset="['65','0','0','0']" data-y="['middle','middle','bottom','bottom']" data-voffset="['100','160','320','200']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power3.easeOut;" data-style_hover="c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);" data-transform_in="y:bottom;s:1200;e:Power4.easeInOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-start={1250} data-splitin="none" data-splitout="none" data-actions="[{&quot;event&quot;:&quot;click&quot;,&quot;action&quot;:&quot;jumptoslide&quot;,&quot;slide&quot;:&quot;rs-164&quot;,&quot;delay&quot;:&quot;&quot;}]" data-responsive_offset="on" data-responsive="off" style={{zIndex: 8, whiteSpace: 'nowrap', fontSize: '18px', lineHeight: '15px', color: 'rgba(255, 255, 255, 1.00)', fontFamily: '"Roboto Condensed", sans-serif', textTransform: 'uppercase'}}>learn more
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/*#rev_slider_1_wrapper*/}
    </div>
    {/* Slider Area End Here*/}
    {/*feature-action*/}
    <div className="feature-action bg1 parallax p-bg primary-overlay">
      {/*feature box start*/}
      <div className="feature-box features-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="features-body sm-mb-30">
                <div className="features-box text-center">
                  <div className="features-elements">
                    <a href="#"><i className="fa fa flaticon-exercise" /></a>
                    <h4 className="mb20">bodybuilding</h4>
                    <p className="mb20">Lorem ipsum dolor sit amet, ei veritus consetetur repudiandae eam, duo ne homero nostro moderatius.</p>
                    <div className="bttn text-center">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="features-body sm-mb-30">
                <div className="features-box text-center">
                  <div className="features-elements">
                    <a href="#"><i className="fa fa flaticon-weightlifting" /></a>
                    <h4 className="mb20">fitness &amp; boxing</h4>
                    <p className="mb20">Lorem ipsum dolor sit amet, ei veritus consetetur repudiandae eam, duo ne homero nostro moderatius.</p>
                    <div className="bttn text-center">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="features-body sm-mb-30">
                <div className="features-box text-center">
                  <div className="features-elements">
                    <a href="#"><i className="fa fa flaticon-dumbbell" /></a>
                    <h4 className="mb20">weight left</h4>
                    <p className="mb20">Lorem ipsum dolor sit amet, ei veritus consetetur repudiandae eam, duo ne homero nostro moderatius.</p>
                    <div className="bttn text-center">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*feature box end*/}
      {/*call to action2 start*/}
      
      {/*call to action end*/}
    </div>
    {/*feature-action*/}
    {/*call to action-1 start*/}

    {/*call to action-1 end*/}
    {/*portfolio-area start*/}
    <div className="portfolio-area port-area2  pad90">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="section-title text-left">
              <div className="title-bar full-width mb20">
                <img src="/assets/images/logo/ttl-bar.png" alt="title-img" />
              </div>
              <h3>workout classes</h3>
            </div>
          </div>
          {/* /.col */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
            <div className="portfolio-nav text-center">
              <ul>
                <li className="active" data-filter="*">All</li>
                <li data-filter=".fitness">fitness</li>
                <li data-filter=".bodybuilding">bodybuilding</li>
                <li data-filter=".boxing">boxing</li>
                <li data-filter=".yoga">yoga</li>
              </ul>
            </div>
          </div>
          {/* /.col */}
        </div>
      </div>
      <div className="no-container">
        <div className="portfolio port-zoom mt60">
          <div className="portfolio-masonry-item  fitness ">
            <div className="port-box primary-overlay">
              <div className="port-img">
                <a href="/assets/images/class-schedule/filtering/1.jpg">
                  <img src="/assets/images/class-schedule/filtering/1.jpg" alt="schedule img" /><i className="ovrlay fa fa-search" /></a>
              </div>
              <div className="port-dtl">
                <h5>muscle building</h5>
                <p>Lorem ipsum dolor sit amet, ei melius saperet mediocritatem quo</p>
              </div>
            </div>
          </div>
          <div className="portfolio-masonry-item   bodybuilding">
            <div className="port-box primary-overlay">
              <div className="port-img">
                <a href="/assets/images/class-schedule/filtering/2.jpg">
                  <img src="/assets/images/class-schedule/filtering/2.jpg" alt="schedule img" /><i className="ovrlay fa fa-search" /></a>
              </div>
              <div className="port-dtl">
                <h5>muscle building</h5>
                <p>Lorem ipsum dolor sit amet, ei melius saperet mediocritatem quo</p>
              </div>
            </div>
          </div>
          <div className="portfolio-masonry-item  boxing ">
            <div className="port-box primary-overlay">
              <div className="port-img">
                <a href="/assets/images/class-schedule/filtering/3.jpg">
                  <img src="/assets/images/class-schedule/filtering/3.jpg" alt="schedule img" /><i className="ovrlay fa fa-search" /></a>
              </div>
              <div className="port-dtl">
                <h5>muscle building</h5>
                <p>Lorem ipsum dolor sit amet, ei melius saperet mediocritatem quo </p>
              </div>
            </div>
          </div>
          <div className="portfolio-masonry-item   yoga">
            <div className="port-box primary-overlay">
              <div className="port-img">
                <a href="/assets/images/class-schedule/filtering/4.jpg">
                  <img src="/assets/images/class-schedule/filtering/4.jpg" alt="schedule img" /><i className="ovrlay fa fa-search" /></a>
              </div>
              <div className="port-dtl">
                <h5>muscle building</h5>
                <p>Lorem ipsum dolor sit amet, ei melius saperet mediocritatem quo</p>
              </div>
            </div>
          </div>
        </div>
        {/* /.portfolio */}
      </div>
      {/* /.no-container */}
    </div>
    {/*portfolio-area end*/}
    {/*schedule-area2 start*/}
    
    {/*schedule-area end*/}
    {/*testimonial area start*/}
    <div className="testimonial-area bg5 paralax overlay pad90">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <div className="title-bar full-width mb20">
                <img src="/assets/images/logo/ttl-bar.png" alt="title-img" />
              </div>
              <h3>testimonial</h3>
            </div>
          </div>
          {/* /.col */}
        </div>
        <div className="row">
          <div className="testimonial-carousel">
            <div className="col-md-12">
              <div className="testimonial-box">
                <div className="test-img">
                  <img src="/assets/images/testimonial/person1.jpg" alt="Local Img" />
                </div>
                <div className="test-content">
                  <div className="person">
                    <h4>charlotte</h4>
                    <h5>student</h5>
                  </div>
                  <p>Lorem ipsum dolor sit amet, an nibh ferri illud mei, at eam viderer vis adipisci efficiendi cu, constituam repudiandae. No mea nonumes delectus placerat, cu cum virtute gubergren incorrupte, eu sed nemore probatus sententiae. Ex , .vis adipisci efficiendi cu, quo inermis feugait salutandi no.</p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="testimonial-box">
                <div className="test-img">
                  <img src="/assets/images/testimonial/person2.jpg" alt="Local Img" />
                </div>
                <div className="test-content">
                  <div className="person">
                    <h4>ikramul islam</h4>
                    <h5>teacher</h5>
                  </div>
                  <p>Lorem ipsum dolor sit amet, an nibh ferri illud mei, at eam viderer vis adipisci efficiendi cu, constituam repudiandae. No mea nonumes delectus placerat, cu cum virtute gubergren incorrupte, eu sed nemore probatus sententiae. Ex , .vis adipisci efficiendi cu, quo inermis feugait salutandi no.</p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="testimonial-box">
                <div className="test-img">
                  <img src="/assets/images/testimonial/person1.jpg" alt="Local Img" />
                </div>
                <div className="test-content">
                  <div className="person">
                    <h4>mahin</h4>
                    <h5>web developer</h5>
                  </div>
                  <p>Lorem ipsum dolor sit amet, an nibh ferri illud mei, at eam viderer vis adipisci efficiendi cu, constituam repudiandae. No mea nonumes delectus placerat, cu cum virtute gubergren incorrupte, eu sed nemore probatus sententiae. Ex , .vis adipisci efficiendi cu, quo inermis feugait salutandi no.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*testimonial area end*/}
    {/*news-area start */}
    
    {/*news-area end */}
    {/*client*/}
    <div className="client pad90">
      <div className="container">
        <div className="row">
          <div className="client_carousel owl-carousel">
            <div className="item">
              <a href="#"><img src="/assets/images/client/1.png" alt="client img" /></a>
            </div>
            <div className="item">
              <a href="#"><img src="/assets/images/client/2.png" alt="" /></a>
            </div>
            <div className="item">
              <a href="#"><img src="/assets/images/client/3.png" alt="" /></a>
            </div>
            <div className="item">
              <a href="#"><img src="/assets/images/client/4.png" alt="" /></a>
            </div>
            <div className="item">
              <a href="#"><img src="/assets/images/client/5.png" alt="" /></a>
            </div>
            <div className="item">
              <a href="#"><img src="/assets/images/client/6.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*client*/}
    <footer>
      <section className="footer-area bg2 parallax overlay pt90">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 ">
              <div className="footer-logo footer-content">
                <img src="/assets/images/logo/logo2.png" alt="footer logo" />
              </div>
              <p>Lorem ipsum dolor sit amet, ei ubique fastidii vim. Elitr feugait complectitur eu pro, sea audire ponderum eleifend cu. Vim at fuisset.</p>
              <div className="add-info">
                <p><a href="#"><i className="fa fa-map-marker" aria-hidden="true" /></a>23 New Design Street, Melbourne</p>
                <p><a href="#"><i className="fa fa-envelope-o" aria-hidden="true" /></a>befitgym@gmail.com</p>
                <p className="mb-0"><a href="#"><i className="fa fa-mobile" aria-hidden="true" /></a>+880-123-456-7890</p>
              </div>
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-12">
              <div className="news-info ftr-algn">
                <div className="footer-title footer-content">
                  <h3>news letter</h3>
                </div>
                <p> sign up for our mailing list to get latest updates and offers</p>
                <div className="subscribe">
                  <form action="#">
                    <input className="name" type="text" placeholder="Enter your email" />
                  </form>
                  <a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                </div>
                <div className="footer-social">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href><i className="fa fa-twitter" /></a></li>
                    <li><a href><i className="fa fa-youtube" /></a></li>
                    <li><a href><i className="fa fa-pinterest" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-12">
              <div className="news-info ftr-algn">
                <div className="footer-title footer-content">
                  <h3>latest post</h3>
                </div>
                <div className="news-detail nws-bar">
                  <img src="/assets/images/footer/1.jpg" alt="" />
                  <p>Set yourself the challenge of doing the bare minimum.</p>
                </div>
                <div className="news-detail">
                  <img src="/assets/images/footer/2.jpg" alt="" />
                  <p>Body fat percentage: what does it really mean?</p>
                </div>
                <div className="news-detail">
                  <img src="/assets/images/footer/3.jpg" alt="" />
                  <p>This treatment sounded just what I was looking for.</p>
                </div>
              </div>
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-12">
              <div className="news-info open-hrs ftr-algn">
                <div className="footer-title footer-content">
                  <h3>opening hours</h3>
                </div>
                <ul>
                  <li>Monday <span>07:00 - 17:00</span></li>
                  <li>tuesday <span>07:00 - 17:00</span></li>
                  <li>wednesday <span>07:00 - 17:00</span></li>
                  <li>thursday <span>07:00 - 17:00</span></li>
                  <li>friday <span>07:00 - 17:00</span></li>
                  <li>saturday <span>07:00 - 17:00</span></li>
                </ul>
              </div>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="instra pad60">
                <h4><span>instragram</span></h4>
              </div>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/*/.container*/}
      </section>
      {/*footer-gallery start*/}
      <div className="footer-gallery owl-carousel">
        <div className="item active"> <a href="/assets/images/instagram/big1.jpg">
            <img src="/assets/images/instagram/1.jpg" alt="Instragram img" /><i className="fa fa-search" /></a>
        </div>
        <div className="item "><a href="/assets/images/instagram/big2.jpg">
            <img src="/assets/images/instagram/2.jpg" alt="Instragram img" /><i className="fa fa-search" /></a>
        </div>
        <div className="item"> <a href="/assets/images/instagram/big3.jpg">
            <img src="/assets/images/instagram/3.jpg" alt="Instragram img" /><i className="fa fa-search" /></a>
        </div>
        <div className="item"> <a href="/assets/images/instagram/big4.jpg">
            <img src="/assets/images/instagram/4.jpg" alt="Instragram img" /><i className="fa fa-search" /></a>
        </div>
        <div className="item"> <a href="/assets/images/instagram/big5.jpg">
            <img src="/assets/images/instagram/5.jpg" alt="Instragram img" /><i className="fa fa-search" /></a>
        </div>
        <div className="item"> <a href="/assets/images/instagram/big6.jpg">
            <img src="/assets/images/instagram/6.jpg" alt="Instragram img" /><i className="fa fa-search" /></a>
        </div>
        <div className="item"> <a href="/assets/images/instagram/big4.jpg">
            <img src="/assets/images/instagram/4.jpg" alt="Instragram img" /><i className="fa fa-search" /></a>
        </div>
        <div className="item"> <a href="/assets/images/instagram/big5.jpg">
            <img src="/assets/images/instagram/5.jpg" alt="Instragram img" /><i className="fa fa-search" /></a>
        </div>
        <div className="item"> <a href="/assets/images/instagram/big6.jpg">
            <img src="/assets/images/instagram/6.jpg" alt="Instragram img" /><i className="fa fa-search" /></a>
        </div>
      </div>
      {/*footer-gallery end*/}
      <div className="copyright pad30">
        <h4>Copyright © <span>iThemeslab</span> All Rights Reserved</h4>
      </div>
    </footer>
  </div>
  {/*Search Popup*/}
  <div id="search-popup" className="search-popup">
    <div className="close-search theme-btn"><span className="fa fa-close" /></div>
    <div className="popup-inner">
      <div className="search-form">
        <form method="post" action="index.html">
          <div className="form-group">
            <fieldset>
              <input type="search" className="form-control" name="search-input" defaultValue placeholder="Search Here" required />
              <input type="submit" defaultValue="Search" className="theme-btn" />
            </fieldset>
          </div>
        </form>
        <br />
        <h3>Recent Search Keywords</h3>
      </div>
    </div>
  </div>
</div>
</>
    )

}

export default Home;