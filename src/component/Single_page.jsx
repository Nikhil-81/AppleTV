import {Fetured} from "../data/page_screen"
import { useState } from "react"
import Cero from "./Single_caro"
export default function Single_page_pos(){
    const [data,setdata]=useState(Fetured)
    return (<div>
        <Cero data={data} />
    </div>)

}

//
