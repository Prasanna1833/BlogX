

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NotFound from './NotFound';

function App() {

  
  return (
    <div className="App">
      <Navbar />
       <div className="content">
         <Router>
           <Routes>
              <Route exact path="/"  element={<Home/>}></Route>
              <Route exact path="/create"  element={<Create />}></Route>
              <Route exact path='/blogs/:id'  element={<BlogDetails/>}></Route>
              <Route exact path='*' element={<NotFound/>}></Route>
           </Routes>
         

         </Router>
       </div>
    </div> 
    
  );
}

export default App;
