import {Route,Routes} from "react-router-dom"
import Home from "../component/Home"
import Show from "../component/show"
import Epic_Show from "../component/epic_comp/epic_show"
export default function Allroutes(){
    return  (
        <div>
                <Routes>
                    <Route path="/" element={<Home/>}  />
                    <Route path="/:show/:id" element={<Show/>}  />
                    <Route path="/:name/s/:season/e/:no" element={<Epic_Show/>}  />
                    {/* <Route path="home/T&C" element={<h1>TERMS AND CONDETIONS</h1>}/> */}
                </Routes>
        </div>
    )
}
