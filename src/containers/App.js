import React from 'react'
import {Link , Router , Route} from '../untils/index'
import {Home , About} from '../components/index'
const App = () => {
    return(
        <div>
        <Router>
        <div>
            <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">HOME</Link>
            <ul className="nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/about">ABOUT</Link>
                </li>
            </ul>
            </nav>
        </div>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        </Router>
        </div>
    )
}

export default App
 