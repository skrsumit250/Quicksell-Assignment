import '../styles/status.css'
import Column from "./Column";
function Priority(){
    return(
        <>
            <div className="status">
                <Column/>
                <Column/>
                <Column/>
                <Column/>
            </div>
        </>
    )
}
export default Priority;