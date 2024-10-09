import '../styles/status.css'
import Column from "./Column";
import { useState,useEffect } from 'react';
function Priority({tickets,sortBy}){
    console.log(tickets);
    const [priorityData,setPriorityData] = useState({
        '0': [],
        '1': [],
        '2': [], 
        '3': [],
        '4': []
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

        const updatedPriorityData = {};
        Object.keys(priorityData).forEach((priority) => {
            updatedPriorityData[priority] = sortedTickets.filter((ticket) => ticket.priority.toString() == priority);
        });
        setPriorityData(updatedPriorityData);
        // console.log(priorityData);
      }, [tickets,sortBy]);
    
    return(
        <>
            <div className="status">
            {Object.keys(priorityData).map((priority, index) => (
                <Column
                    key={index}
                    data={priorityData[priority]}
                    group={['priority',priority]}
                />
            ))}
            </div>
        </>
    )
}
export default Priority;