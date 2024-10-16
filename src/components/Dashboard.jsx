import { useEffect,useState } from "react"
import '../styles/dashboard.css'
import Status from "./Status";
import User from "./User";
import Priority from "./Priority";

function Dashboard(){
    
    const [display,setDisplay] = useState(false);
    const [GroupBy, setGroupBy] = useState(localStorage.getItem('GroupBy') || 'status');
const [SortBy, setSortBy] = useState(localStorage.getItem('SortBy') || '');
    const [tickets,setTickets] = useState([]);
    const [users,setUsers] = useState([]);
    const showDropdown = ()=>{
        setDisplay(!display);
    }
    const handleOption = (e)=>{
        const selectedGroupBy = e.target.value;
        setGroupBy(selectedGroupBy);
        localStorage.setItem('GroupBy', selectedGroupBy);
        setDisplay(!display);
    }
    const handleSort = (e) =>{
        const selectedSortBy = e.target.value;
        setSortBy(selectedSortBy);
        localStorage.setItem('SortBy', selectedSortBy);
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment', {
                  method: 'GET',
                  credentials: 'include',
                });
                const result = await response.json();
                setTickets(result.tickets);
                setUsers(result.users);
            } 
            catch (err) {
              console.error(err);
            }
        };
        fetchData();
    }, []);
    return(

        <> 
            <div className="header">
                <button className="dropdown-button" onClick={showDropdown}>
                    <img src="Display.svg" alt="" />
                    <p>Display</p>
                    <img src="down.svg" alt="" />
                </button>
                {display && 
                    <div className="dropdown-menu">
                        <div className="dropdown-element">
                            <label>Grouping</label>
                            <select onChange={handleOption}>
                                <option value="null">Group</option>
                                <option value="status">Status</option>
                                <option value="user">User</option>
                                <option value="priority">Priority</option>
                            </select>
                        </div>
                        <div className="dropdown-element">
                            <label>Ordering</label>
                            <select onChange={handleSort}>
                            <option value="null">Order</option>
                                <option value="title">Title</option>
                                <option value="priority">Priority</option>
                            </select>
                        </div>
                    </div>
                }
            </div>
            <div className="box">
                {GroupBy == 'status' && <Status tickets={tickets} sortBy={SortBy}/>}
                {GroupBy == 'user' && <User tickets={tickets}  users={users} sortBy={SortBy}/>}
                {GroupBy == 'priority' && <Priority tickets={tickets} sortBy={SortBy}/>}
            </div>
        </>
    )
}
export default Dashboard;