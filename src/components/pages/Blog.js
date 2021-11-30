import React from 'react';
import photo from "../../images/readmore.jpg";

const Blog = () => {
    return (
        <div>
            To
            <img loading="lazy" className="photo5" src={photo} alt="my-photo" />
        </div>
    );
};

export default Blog;



// import { useParams } from 'react-router-dom';
//
// const Blog = (props) => {
//     let { id } = useParams();
//
//     return (
//         <div>
//             {id}
//             To jest BLOG.
//             <img src={photo} alt="" height="500px" width="500px"/>
//         </div>
//     );
// };