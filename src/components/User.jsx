import '../styles/status.css'
import Column from "./Column";
function User(){
    return(
        <>
            <div className="status">
                <Column/>
                <Column/>
                <Column/>
            </div>
        </>
    )
}
export default User;