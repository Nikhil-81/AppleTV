import {useParams} from "react-router-dom"
import Hero_back from "./hero_episode"
import Footer from "./footer"
import Wher_to_watch from "../show/wher_to_watch"
import "./episode.css"
import {useSearchParams} from "react-router-dom"
export default function Epic_Show(){
    const prams =useParams()
    console.log(prams)
    return (
        <div>


        <Hero_back season_num={prams.season } epi_num={prams.no }/>
        <br/>
        <h4 Style={"padding-left:30px;text-align: start"} >How To Watch</h4>
        <Wher_to_watch/>
        <br/>

        <Footer/>
        </div>
    )
}