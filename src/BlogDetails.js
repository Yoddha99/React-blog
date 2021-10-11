import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();
    const handleDelete = (id) => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return (  
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { !isPending && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    {/* <p>size - {Object.keys(blog).length}</p> */}
                    <div>{ blog.body }</div>
                    <button onClick = { ()=> handleDelete(blog.id) }>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;