import React from "react";
import './nav.scss';
import {

    Link, NavLink
} from 'react-router-dom';
class Nav extends React.Component {

    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeclassname="active" exact={true}>Home</NavLink>
                <NavLink to="/todos" activeclassname="active">Todo</NavLink>
                <NavLink to="/user" activeclassname="active">User</NavLink>


            </div>
        )
    }
}

export default Nav;