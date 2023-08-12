import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="Navbar">
            <h1>BlogXX</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">new blog</a>
            </div>
        </div>
     );
}
 
export default Navbar;