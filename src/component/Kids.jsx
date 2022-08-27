import {Kides} from "../data/kids_movie"
import { useState } from "react"
import Cero from "./S_Cero"
export default function Kids_movie(){
    const [data,setdata]=useState(Kides)
    return (<div>
        <Cero data={data} />
    </div>)
}