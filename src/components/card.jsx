import '../styles/card.css'
import { useState, useEffect } from 'react';
function Card({ticket}){
    const [id,setid] = useState('9')
    const [user,setuser] = useState('grey-dot.svg')
    const [status,setstatus] = useState('To-do.svg')
    const [title,settitle] = useState('Implement Email Notification System')
    const [priority,setpriority] = useState('No-priority.svg')
    const [tag,settag] = useState('Feature Request')

    const statusImgPath = {"Todo":"To-do.svg",
        "In progress":"in-progress.svg",
        "Backlog":"Backlog.svg",
        "Done":"Done.svg",
        "Cancelled":"Cancelled.svg"
    }
    const priorityImgPath ={0:"No-priority.svg",
                            1:"low.svg",
                            2:"medium.svg",
                            3:"high.svg",
                            4:"UrgentPrioritycolour.svg"
                    }
    useEffect(()=>{
        // console.log(ticket);
        setid(ticket.id);
        setuser(ticket.userId)
        setstatus(statusImgPath[ticket.status]);
        settitle(ticket.title)
        setpriority(priorityImgPath[ticket.priority]);
        settag(ticket.tag[0]);

    },[ticket]);
    return(
        <>
            <div className="card">
                <div className="card-head">
                    <p>{id}</p>
                    {user && <img src={user} alt="" />}
                </div>
                <div className="card-description">
                    {status && <img src={status} alt="" />}
                    {title && <p>{title}</p>}
                </div>
                <div className="card-bottom">
                    {priority && <img id='bottom-img' src={priority} alt="" />}
                    <div className="card-req">
                        {tag && <img src='grey-dot.svg' alt="" />}
                        {tag && <p>{tag}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;