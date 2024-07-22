import "./list.css";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import { useLocation } from 'react-router-dom'; 
import { useState } from "react";
import { format } from 'date-fns';
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/searchItem";

const List = () => {
    const location = useLocation();
    const defaultState = {
        destination: '',
        date: [{ startDate: new Date(), endDate: new Date() }],
        options: { adult: 1, children: 0, room: 1 }
    };
    const [destination, setDestination] = useState(location.state?.destination || defaultState.destination);
    const [date, setDate] = useState(location.state?.date || defaultState.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state?.options || defaultState.options);

    return (
        <div>
            <Navbar />
            <Header  type ="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listTitle">Search</h1>
                            <div className="lsItem">
                                <label> Destination </label>
                                <input placeholder={destination} type="text" />
                            </div>
                            <div className="lsItem">
                                <label> Check-In-Date</label>
                               <span onClick={()=>setOpenDate(!openDate)}> {`${format(date[0].startDate,"MM/dd/yyyy")} 
                                    to   
                                ${format(date[0].endDate,"MM/dd/yyyy")} `} </span> 
                               { openDate && (<DateRange
                                onChange={(item)=>setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                                />)}
                            </div>
                            <div className="lsItem">
                                <label>Options</label>
                                <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        MinPrice <small>per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput"/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        MaxPrice <small>per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput"/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Adult
                                    </span>
                                    <input type="number" className="lsOptionInput" min={1} placeholder={options.adult}/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Children
                                    </span>
                                    <input type="number" className="lsOptionInput" min={0} placeholder={options.children}/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Room
                                    </span>
                                    <input type="number" className="lsOptionInput" min={1} placeholder={options.room}/>
                                </div>
                                </div>
                            </div>
                            <button>Search</button>
                    </div>
                    <div className="listResult">
                                <SearchItem/>
                                <SearchItem/>
                                <SearchItem/>
                                <SearchItem/>
                                <SearchItem/>
                                <SearchItem/>
                                <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
