import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './home';
import Register from './register';

const Main = function(props) {
    return(
        <div>
            <ul>
                <li><Link to={ props.match.path + '/home' }>HomePage</Link></li>
                <li><Link to={ props.match.path + '/register' }>Register</Link></li>
            </ul>
            <Route path={ props.match.path + '/home' } component={ Home }/>
            <Route path={ props.match.path + '/register' } component={ Register }/>
        </div>

    );
}

export default Main;