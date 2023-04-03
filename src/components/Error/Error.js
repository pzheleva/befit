import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>

      {/* /.page-header */}
      {/* page title & breadcrumbs end */}
      {/*error-page-area*/}
      <div className="error-page-area pad90">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-full text-center">
                <h1>404</h1>
                <h2>PAGE NOT FOUND</h2>
                <p>sorry we couldn't find a page your're looking for</p>
                <Link to="/home">home page</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
