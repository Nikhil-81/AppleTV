import {Nofiction} from "../data/nofiction"
import { useState } from "react"
import Cero from "./S_Cero"
export default function Nofiction_Movie(){
    const [data,setdata]=useState(Nofiction)
    return (<div>
        <Cero data={data} />
    </div>)

}

//
