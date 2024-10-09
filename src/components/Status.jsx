import '../styles/status.css'
import Column from "./Column";
import { useState,useEffect } from 'react';
function Status({tickets,sortBy}){
    const [statusData,setStatusData] = useState({
        "Backlog": [],
        "Todo": [],
        "In progress": [], 
        "Done": [],
        "Cancelled": []
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

        const updatedStatusData = {};
        Object.keys(statusData).forEach((status) => {
            updatedStatusData[status] = sortedTickets.filter((ticket) => ticket.status === status);
        });
        setStatusData(updatedStatusData);
        // console.log(statusData);
    }, [tickets,sortBy])
    
    return(
        <>
            <div className="status">
            {Object.keys(statusData).map((status, index) => (
                <Column
                    key={index}
                    data={statusData[status]}
                    group={['status',status]}
                />
            ))}
            </div>
        </>
    )
}
export default Status;