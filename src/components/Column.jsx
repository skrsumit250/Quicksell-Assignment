import '../styles/column.css'
import Card from './Card.jsx'
import { useState, useEffect } from 'react'
function Column({data,group}){
    const [icon,setIcon] = useState('grey-dot.svg');
    const [name,setName] = useState('Sumit');
    const [count,setCount] = useState('0');

    const statusImgPath = {"Todo":"To-do.svg",
                            "In progress":"in-progress.svg",
                            "Backlog":"Backlog.svg",
                            "Done":"Done.svg",
                            "Cancelled":"Cancelled.svg"
                            }
    const priorityImgPath = { '0':"No-priority.svg",
                            '1':"low.svg",
                            '2':"medium.svg",
                            '3':"high.svg",
                            '4':"UrgentPrioritycolour.svg"
                        }
    const priorityTitle = { '0':"No Priority",
                            '1':"Low",
                            '2':"Medium",
                            '3':"High",
                            '4':"Urgent"
                        }
    const userTitle = { 'usr-1':"Anoop Sharma",
                        'usr-2':"Yogesh",
                        'usr-3':"Shankar Kumar",
                        'usr-4':"Ramesh",
                        'usr-5':"Suresh"
                    }

    useEffect(()=>{
        if(group[0]=='status'){
            setIcon(statusImgPath[group[1]]);
            setName(group[1]);
        }
        else if(group[0]=='priority'){
            setIcon(priorityImgPath[group[1]]);
            setName(priorityTitle[group[1]]);
        }
        else if(group[0]=='user'){
            setName(userTitle[group[1]]);
        }
        setCount(data.length ? data.length:'0');
        
        // console.log('group',group[1]);
        // console.log('data',data);
        // console.log('name',name);
        
    },[data]);

    return(
        <>
            <div className="column">
                <div className="column-head">
                    <div className="column-head-left">
                        {icon && <img src={icon} alt="" />}
                        {name && <p>{name}</p>}
                        {count && <p>{count}</p>}
                    </div>
                    <div className="column-head-right">
                        <img src="add.svg" alt="" />
                        <img src="3dotmenu.svg" alt="" />
                    </div>
                </div>
                <div className="column-element">
                    {data.map((ticket,index)=>(
                        <Card ticket={ticket} key={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Column