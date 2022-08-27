import {ReletedData} from "./data/releted"
import { useState } from "react"
import Cero from "./episode_cero"
export default function Episodes(){
    const [data,setdata]=useState(ReletedData)
    return (<div>
        <Cero data={data} />
    </div>)
}