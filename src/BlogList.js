import {Link} from 'react-router-dom';
const BlogList = ({text,blogs}) => {
     
    return ( 
        <div className="BlogList">
             <h2>{text}</h2>
            { 
                 
                blogs.map((blog)=>
                   <div className="blog-preview" key={blog.id}>
                   <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.author}</h2>
                    <h3>{blog.title}</h3>
                    </Link>
                    
                   </div>
                )
            }

        </div>
       

         );
        }
        /*<button onClick={()=>handleDelete(blog.id)}>delete me</button>*/

 
export default BlogList;