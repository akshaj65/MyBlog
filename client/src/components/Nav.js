// for searching a json file  https://medium.com/crobyer/search-filter-with-react-js-88986c644ed5
import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

function Nav() {
    
    return (
        <nav>
            <h3 >dummy</h3>
            <Search/>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/About">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/Contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;