import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Pomodoro Timer</h1>
        <div>
            <NavLink to="/" activeClassName="is-active" exact={true}>Timer</NavLink>
            <NavLink to="/setting" activeClassName="is-active">Setting</NavLink>
            <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
        </div>
    </div>
);

export default Header;