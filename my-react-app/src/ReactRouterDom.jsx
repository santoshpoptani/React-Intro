
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import Home from './Pages/Home';
import Profile from './Pages/Profile'
import About from './Pages/About';
import Error from './Pages/Error';

function ReactRouterDom(){


    return(
        <div>
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="profile">Profile</Link>
                </nav>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path="/profile/:username" element={<Profile/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='*' element={<Error/>}></Route>
                </Routes>
            </Router>
        </div>
    )

}

export default ReactRouterDom;