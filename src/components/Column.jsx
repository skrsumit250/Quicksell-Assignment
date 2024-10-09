import '../styles/column.css'
import Card from './Card.jsx'
import { useState, useEffect } from 'react'
function Column({data,status}){
    const [icon,setIcon] = useState('To-do.svg');
    const [name,setName] = useState('Sumit');
    const [count,setCount] = useState('0');

    const statusImgPath = {"Todo":"To-do.svg",
        "In progress":"in-progress.svg",
        "Backlog":"Backlog.svg",
        "Done":"Done.svg",
        "Cancelled":"Cancelled.svg"
    }

    useEffect(()=>{
        setIcon(statusImgPath[status]);
        setName(status);
        setCount(data.length ? data.length:'0');
        
    },[data]);
    console.log(status);
    console.log('data',data);
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
                    { data && data.map((ticket,index)=>(
                        <Card ticket={ticket}/>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Column