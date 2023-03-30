import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="container py-5">
          <div className="row py-3">
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 opening-hours">
              <h6 className="text-uppercase font-weight-bold mb-4">Opening hours</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                Monday 07:00 - 20:00
                </li>
                <li className="mb-2">
                Tuesday 07:00 - 20:00
                </li>
                <li className="mb-2">
                Wednesday 07:00 - 20:00
                </li>
                <li className="mb-2">
                Thursday 07:00 - 20:00
                </li>
                <li className="mb-2">
                Friday 07:00 - 20:00
                </li>
                <li className="mb-2">
                Weekend 07:00 - 18:00
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 address">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Registered Office Address
              </h6>
              <p className="text-muted mb-4">
              <p><a href="#"><i className="fa fa-map-marker" aria-hidden="true" /></a> Atanas Moskov str, Sofia, Bulgaria</p>
                <p><a href="#"><i className="fa fa-envelope-o" aria-hidden="true" /></a> befitgym@gmail.com</p>
                <p className="mb-0"><a href="#"><i className="fa fa-mobile" aria-hidden="true" /></a> +880-123-456-7890</p>
              </p>
            </div>
            <div className="social">
            <ul className="list-inline mt-4">
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="twitter">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="facebook">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="pinterest">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" target="_blank" title="vimeo">
                    <i className="fa fa-google" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="p-0 m-0 b-0" />

        <div className="copyright pad30">
          <h4>
            Copyright © <span>iThemeslab</span> All Rights Reserved
          </h4>
        </div>
      </footer>
    </>
  );
}
