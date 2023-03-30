
import "./SingleComment.css";

export default function SingleComment({data, key}) {

    return(
        <div className="mt-2">
          <div className="d-flex flex-row p-3">
          <span className="username-sec">{data.user}</span>
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                <small>{data.date}</small>
              </div>
              <p className="text-justify comment-text mb-0">
                {data.text}
              </p>
            </div>
          </div>
        </div>
    )
}