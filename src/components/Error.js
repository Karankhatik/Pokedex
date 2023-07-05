import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError()
    return(
        <div className="bg-red-600 text-8xl font-medium rounded-md shadow-xl text-center  text-white w-100 h-100 m-40">
            <div className="p-40">
            <h1>You made a mistake </h1>
            <h1>{err.status} : {err.statusText}</h1>
            </div>
            
        </div>
    )
}
export default Error;