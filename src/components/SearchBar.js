import { useContext, useEffect, useMemo, useRef, useState } from "react";
import SpanSubHeading from "./SpanSubHeading";
import { AppContext } from "../context/ContextProvider";
import { cityData } from "../data/Constants";

export default function SearchBar() {
    const data = useMemo(() => {
        return cityData
    }, []);
    const { searchTerm, setSearchTerm } = useContext(AppContext);
    const [filteredData, setFilteredData] = useState([...data]);
    const [search, setSearch] = useState(searchTerm);
    const [showDropdown, setShowDropdown] = useState(false);
    const [highlightedIdx, setHighlightedIdx] = useState(-1);
    const ref = useRef(null);

    //if clicked outside the search bar, it will close the drop-down
    const handleOutsideClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setShowDropdown(false);
        }
    }

    //perform operations on pressing different keys
    const handleKeyDown = (e) => {
        //arrow down key will change the highlighted option to the next available one
        if (e.key === "ArrowDown") {
            setHighlightedIdx(highlightedIdx => highlightedIdx < filteredData.length - 1 ? highlightedIdx + 1 : 0);
            const element = document.getElementById(highlightedIdx < filteredData.length - 1 ? highlightedIdx + 1 : 0);
            element.scrollIntoView({
                block: "center"
            });
        }
        //arrow up key will change the highlighted option to the previous one
        else if (e.key === "ArrowUp") {
            setHighlightedIdx(highlightedIdx => highlightedIdx > 0 ? highlightedIdx - 1 : filteredData.length - 1);
            const element = document.getElementById(highlightedIdx > 0 ? highlightedIdx - 1 : filteredData.length - 1);
            element.scrollIntoView({
                block: "center"
            });
        }
        //enter key will select the option and begin searching for the city data. Enter key can also be pressed if the city was not found in the drop-down to search a custom city.
        else if (e.key === "Enter" && highlightedIdx >= 0) {
            setShowDropdown(false);
            setSearch(filteredData[highlightedIdx]);
            setSearchTerm(filteredData[highlightedIdx]);
            document.getElementById("search").blur();
        }
        else if (e.key === "Enter") {
            setShowDropdown(false);
            setSearchTerm(search);
            document.getElementById("search").blur();
        }
    }

    //checking for mouse down event to open/close drop-downs
    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return (() => {
            document.removeEventListener('mousedown', handleOutsideClick);
        })
    }, []);

    //implemented debouncing for Search operation when the user starts typing data
    useEffect(() => {
        let timeout;
        if (search) {
            timeout = setTimeout(() => {
                setFilteredData(data.filter((val) => val.toLowerCase().includes(search.toLowerCase())));
            }, 500);
        }
        else {
            setFilteredData(data);
        }
        return (() => {
            clearTimeout(timeout);
        })
    }, [search, data]);

    return (
        <div ref={ref} className="search-bar" onClick={(e) => e.stopPropagation()}>
            <input className="search-input"
                placeholder="Search a city"
                value={search}
                id="search"
                onClick={(e) => setShowDropdown(true)}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <div className="sub-div">
                {showDropdown && <ul className="dropdown-list">
                    <>
                        {filteredData.length > 0 ? filteredData.map((val, idx) => {
                            return <li
                                className={searchTerm === val ? "dropdown-item dropdown-item-selected" : (idx === highlightedIdx) ? "dropdown-item dropdown-item-highlighted" : "dropdown-item"}
                                id={idx}
                                key={idx}
                                onMouseEnter={() => setHighlightedIdx(idx)}
                                onClick={() => {
                                    setSearch(val);
                                    setSearchTerm(val);
                                    setHighlightedIdx(idx);
                                    setShowDropdown(false);
                                    document.getElementById("search").blur();
                                }}
                            >
                                {val}
                            </li>
                        }) : <SpanSubHeading style={{marginLeft: "10px"}}>City not found. Press enter to search it's data.</SpanSubHeading>}
                    </>
                </ul>}
            </div>
        </div>
    );
}