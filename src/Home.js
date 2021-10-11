// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    // const [name, setName] = useState('Niraj');
    // const [age, setAge] = useState(22);

    // const handleClick = () => {
    //     // console.log("hello " + name, e.target);
    //     setName('Aryan');
    //     setAge(23);
    // }



    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { error && <div> { error } </div>}
            { isPending && <div>Loading...</div> }
            {/* <p>{ name } is { age } years old</p> */}
            {/* <button onClick={ (e) => handleClick() } >Click me!</button> */}
            { !isPending && <BlogList blogs={ blogs } title={ "All Blogs" } />}
            {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'mario') } title={ "Mario's Blogs" } /> */}
        </div>  
    );
}
 
export default Home;
