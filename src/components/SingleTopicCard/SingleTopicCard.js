import { Link } from "react-router-dom";

export default function SingleTopicCard({data, key}) {

    let comments = data.comments.length;
    let text = data.textplace.substring(0, 70);


    return (
    <div className="col-lg-6 col-md-12">
          <div className="blog-box blog-page mt40">
            <div className="blog-img">
              <img src={data.imageUrl} alt="Blog img" />
            </div>
            <div className="blog-date">
              <div className="date-box">
                <span className="date">{data.currDay}</span>
                <span className="month">{data.currMonth}</span>
              </div>
            </div>
            <div className="blog-content">
              <div className="blog-title">
                <a href="#">{data.title}</a>
              </div>
              <div className="meta">
                <div className="news-author">
                  <i className="fa fa-user" />
                  <a href="#">{data.firstName}</a>
                </div>
                <div className="coment-counter news-author">
                  <i className="fa fa-comments" />
                  <a href="#">{comments}</a>
                </div>
              </div>
              <div className="news-introtxt">
                <p>{text} </p>
              </div>
              <div className="blog-footer">
                <Link to={`/blog/details/${data.id}`}>read more</Link>
              </div>
            </div>
          </div>
        </div>
    )
}