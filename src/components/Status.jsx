import '../styles/status.css'
import Column from "./Column";
import { useState,useEffect } from 'react';
function Status({tickets}){
    const [statusData,setStatusData] = useState({
        "Backlog": [],
        "Todo": [],
        "In progress": [], 
        "Done": [],
        "Cancelled": []
    });
    const statusImgPath = {"Todo":"Todo.svg",
                           "In progress":"inProgress.svg",
                           "Backlog":"Backlog.svg",
                           "Done":"Done.svg",
                           "Cancelled":"Cancelled.svg"
                          }
    useEffect(() => {
        console.log(tickets);
        const updatedStatusData = {};
        Object.keys(statusData).forEach((status) => {
            updatedStatusData[status] = tickets.filter((ticket) => ticket.status === status);
        });
        setStatusData(updatedStatusData);
        console.log(statusData);
    }, [tickets])
    
    return(
        <>
            <div className="status">
            {Object.keys(statusData).map((status, index) => (
                <Column
                    key={index}
                    data={statusData[status]}
                    status={status}
                    imgPath={statusImgPath[status]}
                />
            ))}
            </div>
        </>
    )
}
export default Status;