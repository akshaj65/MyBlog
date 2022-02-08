// for searching a json file  https://medium.com/crobyer/search-filter-with-react-js-88986c644ed5
import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import '../templates/utilites.css'

function Nav() {
    
    return (
        <nav>
            <h3><Link exact  to="/">dummy</Link></h3>
            <Search/>
            <ul>
                <li>
                    <Link exact className="__borderBox"  to="/create">
                        CREATE BLOG
                    </Link>
                </li>
                <li>
                    <Link exact  to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;