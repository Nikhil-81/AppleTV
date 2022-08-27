import {Data_Fun_for_all} from "../data/fun_for_all"
import { useState } from "react"
import Cero from "./S_Cero"
export default function Fun_movie(){
    const [data,setdata]=useState(Data_Fun_for_all)
    return (<div>
        <Cero data={data} />
    </div>)

}

//
