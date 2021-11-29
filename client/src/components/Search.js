import { GrSearch } from "react-icons/gr";
// import JSONDATA from '';
import Suggestion from './Suggestion';
import list  from '../MOCK_DATA.json';
import { useState, useEffect } from "react";

function Search() {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const [Input, setInput] = useState("") //for autocompletion and for searching ->(see search-icon)
    useEffect(() => {
        // console.log(list)
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
        value=value.replace(/[^a-zA-Z0-9]/g,'');//change all characters except numbers and letters 
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
            <i frame id="search-icon" ><a href={Input}><GrSearch color="pink"/></a></i>

            {visibility && <ul className="search-list" >
                {/* we can also use filteredData.slice(0,4).map((filt_value) */}
                {filteredData.map((filt_value,index) => {
                    return (
                        
                        index<5 &&<li className="search-list-child" key={filt_value.id} onClick={e=>{setInput(e.target.innerText)}} >
                            {/* <a href={filt_value.name}>{filt_value.name}</a>   to directly going to the topic */}
                            {filt_value.name} 
                        </li>
                        
                    )
                })}
                 {visibility && <Suggestion />}
            </ul>}
           
        </div>

    )
}

export default Search;
