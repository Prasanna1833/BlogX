import {Link} from 'react-router-dom';
const NotFound = () => {
    return ( 
        <div className="NotFound"><div>sorry!!</div>
         <p>the requested page is not found!!</p>
         <Link to="/">go back to homepage</Link>
        </div>
       
     );
}
 
export default NotFound;