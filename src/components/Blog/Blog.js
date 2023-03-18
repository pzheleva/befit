import { Link } from "react-router-dom"
import "./Blog.css"
import SingleTopicCard from "../SingleTopicCard/SingleTopicCard"
import { getTopicName } from "../../services/blogService";
import { useState, useEffect } from "react";
let initialState = [];

const Blog = () => {


        const [allTopics, setAllTopics] = useState([]);

        useEffect(() => {
            async function getThemes() {
                const result = await getTopicName();
                initialState = [...result];
                setAllTopics(result);
    
            }

            getThemes()
        }, [])
   

    return (
        <div>
  <div className="news pt50 pb90">
    <div className="container">
      <div className="row">
      <div className="container" id="post_theme">
    <Link to="/post-topic">POST TOPIC</Link>
    </div>
        
        {allTopics.length > 0 ? (
                <>
				{ allTopics.map(c => <SingleTopicCard key = {c.id} data = {c}/>) }
			 </> )
			 : 
			 <h4 className="noClasses">No classes found.</h4>}
      </div>
    </div>
  </div>
  {/*news-area end */}
</div>

    )
}

export default Blog;