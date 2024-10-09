import '../styles/status.css'
import Column from "./Column";
import { useState,useEffect } from 'react';
function User({tickets,sortBy}){
    const [userData,setUserData] = useState({
        'usr-1':[],
        'usr-2':[],
        'usr-3':[],
        'usr-4':[],
        'usr-5':[],
    });


    useEffect(() => {
        // console.log(tickets);
        const sortedTickets = [...tickets].sort((a, b) => {
            if (sortBy === 'priority') {
                return b.priority - a.priority;
            } 
            else if (sortBy === 'title') {
                return a.title.localeCompare(b.title); 
            }
            return 0;
        });
        const updateduserData = {};
        Object.keys(userData).forEach((status) => {
            updateduserData[status] = sortedTickets.filter((ticket) => ticket.userId === status);
        });
        setUserData(updateduserData);
        // console.log(userData);
    }, [tickets,sortBy])
    
    return(
        <>
            <div className="status">
            {Object.keys(userData).map((user, index) => (
                <Column
                    key={index}
                    data={userData[user]}
                    group={['user',user]}
                />
            ))}
            </div>
        </>
    )
}
export default User;