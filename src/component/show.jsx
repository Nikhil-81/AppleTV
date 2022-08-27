import {Navigate, useParams} from "react-router-dom"
import "./show/show.css"
import Trailer from "../component/show/trailer"
import { useEffect,useState } from "react"
import Hero_back from "./show/hero"
import Bonus from "./show/bonus"
import Releted from "./show/releted"
import Cast_And_Crue from "./show/cast_and_crue"
import Wher_to_watch from "./show/wher_to_watch"
import Footer from "./show/footer"
import Drop_down from "./show/drop_down"
import Cero from "./show/episode_cero"
import { useNavigate } from "react-router-dom";



function getdata(id){
    return fetch(`http://localhost:8000/data/${id}`).then(res=>(res.json())).catch(err=>console.Console.log(err))
}
export default function Show(){
    let navigate = useNavigate();
    const [data,setdata]=useState({})
    const [e_data,setedata]=useState([])
    const prams=useParams()
    // console.log(prams)
    useEffect(()=>{
        getdata(prams.id).then(res=>(setdata(res))).catch(err=>console.log(err))
        console.log(data)
    },[])
    
    function hendlechange(event){
        let id=(event.target.value)
        setedata(data.seasons[id].elements)
    }
    
    
    
    useEffect(()=>{
        data.seasons && data.seasons?setedata(data.seasons[0].elements):console.log("hello")
        console.log(e_data)
 },[data])

function hendleData(el){
    // console.log(el)
    navigate(`/${data.name}/s/${el.season}/e/${el.epi_no}`);
}

    return(
        <div>
            <Hero_back data={data}/>
            <hr/>
            <Drop_down data={data.seasons} hendlechange={hendlechange}/>
            <Cero data={e_data} hendleData={hendleData} />
            {/* {console.log(e_data)} */}

            <hr/>
            <h4 className="Style_show_Header">Trailer</h4>
            <Trailer data={data.t_image} />
            <hr/>
            <h4 className="Style_show_Header">Bonus</h4>
            <Bonus data={data.b_image} />
            <hr/>
            <h4 className="Style_show_Header">Releted</h4>
            <Releted/>
            <hr/>
            <h4 className="Style_show_Header">Cast&Crew</h4>
            <Cast_And_Crue data={data.c_and_c} />
            <hr/>
            <Wher_to_watch data={data} />
            <hr/>
<Footer data={data}/>
<hr/>

        </div>
    )
}