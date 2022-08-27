import {useParams} from "react-router-dom"
export default function Epic_Show(){
    const prams =useParams()
    console.log(prams)
    return (
        <div>
        <h1>Episode</h1>
        </div>
    )
}