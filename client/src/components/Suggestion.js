import React from 'react'
import { Link } from 'react-router-dom';
import list from '../MOCK_DATA.json';


const Suggestion = () => {

    return (
        <ul className="suggestion"  >
 
            {list.map((item) => (
                //    <li  key={item.id}> </li>         
                    <Link to={item.name} className="suggestion-child" key={item.id}>{item.name}</Link>
             )
           )}
        </ul >
    );
};

export default Suggestion;


