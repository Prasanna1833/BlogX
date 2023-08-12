import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Create = () => {
    const[title,setTitle]=useState('');
    const[body,setBody]= useState('');
    const[author,setAuthor]=useState('');
    const[isPending,setIsPending]=useState(false);
    const navigate = useNavigate();
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog ={title,author,body};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-type":'application/json'},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('blog is added');
            setIsPending(false);
            //history.go(-1);
            navigate('/');
        }
        )
    }

    return ( 
        <div className="create">
           <h2>add a new blog </h2>
           <form onSubmit={handleSubmit}>
            <label >blog name:</label>
            <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <label >blog:</label>
            <textarea required value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>
            <label >author:</label>
            <input type="text" required value={author} onChange={(e)=>setAuthor(e.target.value)}/>
          
            {!isPending &&<button>add blog</button>}
            {isPending &&<button disabled>adding blog..</button>}
           </form>
        </div>
     );
}
 
export default Create;

 /* <select onChange={(e)=>setAuthor(e.target.value)} >
                <option value="prasanna">Prasanna</option>
                <option value="Ragnar">Ragnar</option>
            </select>*/