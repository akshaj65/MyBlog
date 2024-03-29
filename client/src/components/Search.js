// import { GrSearch } from "react-icons/gr";
import Suggestion from './Suggestion';
import list from '../MOCK_DATA.json';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

function Search() {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const [Input, setInput] = useState("") //for autocompletion and for searching ->(see search-icon)
    useEffect(() => {
        setAllData(list);
        setFilteredData(list)

    }, [])
    const [visibility, setVisibility] = useState(false)

    const onBlurHandler = () => {
        setTimeout(() => {
            setVisibility(false)
        }, 100);



    }

    const onInputHandler = (event) => {
        setInput(event.target.value)
        let value = event.target.value.toLowerCase();//making the input lowercase
        value = value.replace(/[^a-zA-Z0-9]/g, '');//change all characters except numbers and letters 
        let result = [];
        // console.log("value " + value);
        result = allData.filter((data) => {
            // console.log("hi"+data.name.search(value));
            return data.name.toLowerCase().search(value) !== -1; //while comparing making the data set also lowercase
        });
        setVisibility(true)
        setFilteredData(result);

    }
    return (
        <div id="search" onBlur={onBlurHandler}>
            <input type="text" placeholder="Search" value={Input} onChange={onInputHandler} onClick={onInputHandler} />
            <i frame id="search-icon" ><Link exact to={Input}><SearchIcon /></Link></i>

            <ul className={visibility ? 'search-list fade-in' : 'search-list fade-out'}>
                {/* we can also use filteredData.slice(0,4).map((filt_value) */}
                {filteredData.map((filt_value, index) => {
                    return (

                        index < 5 && <li className="search-list-child" key={filt_value.id} onClick={e => { setInput(e.target.innerText) }} >
                            {/* <a href={filt_value.name}>{filt_value.name}</a>   to directly going to the topic */}
                            {filt_value.name}
                        </li>

                    )
                })}
                <Suggestion />
            </ul>

        </div>

    )
}

export default Search;
