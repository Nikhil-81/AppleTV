import {Page_screen} from "../data/featured"
import { useState } from "react"
import Cero from "./S_Cero"
export default function Fetured_movie(){
    const [data,setdata]=useState(Page_screen)
    return (<div>
        <Cero data={data} />
    </div>)
}