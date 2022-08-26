import {ReletedData} from "./data/releted"
import { useState } from "react"
import Cero from "./show_cero"
export default function Releted(){
    const [data,setdata]=useState(ReletedData)
    return (<div>
        <Cero data={data} />
    </div>)
}