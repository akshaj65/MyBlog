import React from 'react'
import list from '../MOCK_DATA.json';


const Suggestion = () => {

    return (
        <ul className="suggestion"  >
 
            {list.map((item) => (
                //    <li  key={item.id}> </li>         
                    <a href={item.name} className="suggestion-child" key={item.id}>{item.name}</a>
             )
           )}
        </ul >
    );
};

export default Suggestion;


