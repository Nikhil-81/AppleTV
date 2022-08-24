import {Route,Routes} from "react-router-dom"
import Home from "../component/Home"
export default function Allroutes(){
    retrun (
        <div>
                <Routes>
                    <Route path="/home" element={<Home/>}  />
                    <Route path="/home/show/:id" element={<Show/>}  />
                    <Route path="/home/:show/:id" element={<Show/>}  />
                    <Route path="home/T&C" element={<h1>TERMS AND CONDETIONS</h1>}/>
                </Routes>
        </div>
    )
}