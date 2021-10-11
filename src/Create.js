import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);

        setTimeout(()=>{
            fetch('http://localhost:8000/blogs', {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(blog)
            }).then((res)=>{
                setIsPending(false);
                return res.json();
            }).then(data => {
                // history.go(-1);
                history.push(`/blogs/${data.id}`);
            })
        }, 300)
    }

    return (  
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit = { handleSubmit }>
                <label>Blog title:</label>
                <input 
                type="text"
                value={ title }
                onChange = { (e)=> setTitle(e.target.value) }
                required/>
        
                <label>Blog Body:</label>
                <textarea
                value={ body }
                onChange = { (e)=> setBody(e.target.value) }
                required/>
                
                <label>Blog author:</label>
                <select value={ author } onChange={ (e) => setAuthor(e.target.value) }>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
            </form>
        </div>
    );
}
 
export default Create;