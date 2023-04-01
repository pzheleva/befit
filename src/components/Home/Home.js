import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Footer from '../Footer/Footer';



const Home = () => {

  const location = useLocation();
  const [count, setCount] = useState(0);
  function onLoad () {
    const loadEv = document.createEvent("HTMLEvents");
    loadEv.initEvent("load", true, true);
    window.dispatchEvent(loadEv);
  }
  
  useEffect(() => {
      // execute on location change
    onLoad();
  }, [location]);




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

    {/*header end*/}
    {/* Slider Area Start Here*/}
    <div className="slider-area1">
      <div id="rev_slider_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="photography1" style={{backgroundColor: 'transparent', padding: '0px'}}>
        <div id="rev_slider_1" className="rev_slider fullscreenbanner" style={{display: 'none'}} data-version="5.0.7">
          <ul>
            {/* SLIDE  */}
            <li data-index="rs-1" data-transition="slideoververtical">
              {/* MAIN IMAGE */}
              <img src="https://ychef.files.bbci.co.uk/1376x774/p07ztf1q.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
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
              <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/fit-female-doing-glute-workouts-outside.jpg?itok=nGlemk-s" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
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
              <img src="https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20WDnet%20Studio,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1539281039/sf9w0uidrwrvnecqd9uk.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
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
                    <p className="mb20">A regimen of exercises designed to enhance the human body's muscular development and promote general health and fitness</p>
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
                    <p className="mb20">One's ability to execute daily activities with optimal performance, endurance, and strength with the management of disease, fatigue, and stress and reduced sedentary behavior</p>
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
                    <h4 className="mb20">CrossFit</h4>
                    <p className="mb20">CrossFit is a strength and conditioning workout that is made up of functional movement performed at a high intensity level.</p>
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
                  <img src="https://i.cnnturk.com/i/cnnturk/75/0x555/5d501c69214ed81ac4bbe2b2" alt="schedule img" /><i className="ovrlay fa fa-search" /></a>
              </div>
              <div className="port-dtl">
                <h5>Yoga</h5>
                <p>Lorem ipsum dolor sit amet, ei melius saperet mediocritatem quo</p>
              </div>
            </div>
          </div>
          <div className="portfolio-masonry-item   bodybuilding">
            <div className="port-box primary-overlay">
              <div className="port-img">
                <a href="/assets/images/class-schedule/filtering/2.jpg">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXa1JtqxIUDr-elLx-b8LU7GAm1lfQYNZjg&usqp=CAU" alt="schedule img" /><i className="ovrlay fa fa-search" /></a>
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
                  <img src="https://pbs.twimg.com/media/Cg5OrB7WkAAm4vz?format=jpg&name=small" alt="schedule img" /><i className="ovrlay fa fa-search" /></a>
              </div>
              <div className="port-dtl">
                <h5>Zumba</h5>
                <p>Lorem ipsum dolor sit amet, ei melius saperet mediocritatem quo </p>
              </div>
            </div>
          </div>
          <div className="portfolio-masonry-item   yoga">
            <div className="port-box primary-overlay">
              <div className="port-img">
                <a href="/assets/images/class-schedule/filtering/4.jpg">
                  <img src="data:image/jpeg;base64,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" alt="schedule img" /><i className="ovrlay fa fa-search" /></a>
              </div>
              <div className="port-dtl">
                <h5>boxing</h5>
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
    
    {/*testimonial area end*/}
    {/*news-area start */}
    
    {/*news-area end */}
    {/*client*/}
    

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