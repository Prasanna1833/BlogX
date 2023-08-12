
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home =() =>{

    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');
  /*  const [name,setName]=useState("prasanna");
    const [color,setColor]=useState("red");
    const handleclick=()=>{
         setName("swarna");
         setColor("blue");
    }

    const handle=(name)=>{
        console.log("hello" +name);
    }
*/
   // const [name,setName] = useState("prasanna");
   /* const [blogs,setBlogs] = useState(
        [
            {title:"my new website",body:"lorem ipsum...",author:"prasanna",id:1},
            {title:"welcome",body:"lorem ipsum...",author:"ragnar",id:2},
            {title:"web dev tool kits",body:"lorem ipsum...",author:"prasanna",id:3},
        ]
    ); */

    


    /* const handleDelete=(id)=>{
        const newBlogs = blogs.filter(blog=>blog.id!==id);
        setBlogs(newBlogs);
    } */

    /*useEffect(()=>{
       console.log("hello ");
          
    },[name]
    );*/

    
    
    return(
     /*   <div className="Home">
            <p>homepage</p>
            <p>{name}'s favourite color is {color}</p>
            <button onClick={handleclick}>click me</button>
            <button onClick={()=>{handle("prasanna")}}>hit me</button>
        </div> */
         
        <div className="home">
        {error && <div>{error}</div>} 
       {isPending&&<div>Loading ,wait a bit.....</div>}
       {blogs && <BlogList text="Latest Blogs By" blogs={blogs} />}
       
       
        
       
       
       </div>
    

    /* {blogs &&<BlogList text="Blogs By Prasanna" blogs={blogs.filter((blog)=>blog.author==="prasanna")}  handleDelete={handleDelete}  />}; */
   /* {blogs && <BlogList text="Latest Blogs By" blogs={blogs} handleDelete={handleDelete}/>};*/
   /*<button onClick={()=>setName("ragnar")}>change name</button>*/




   
  
   
    );
}

export default Home;