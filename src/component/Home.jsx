import Nav from "./Nav"
import BlackScreen from "./blackScreen"
import {Link} from "react-router-dom"
import {Card,Button} from "react-bootstrap"
import Accor from "./Q&A"
// import Test from "./test"
import './Home.css'
import Cero from "./Dcerosel"
import Fetured_movie from "./fetured"
import Kids_movie from "./Kids"
import Fun_movie from "./fun"
import Nofiction_Movie from "./nofiction"
import Single_page_pos from "./Single_page"
export default function Home(){

  function hendleclick(id){
    console.log(id)
  }

    return(<div>
        {/* <Nav/> */}
        <div className="contenor">
        <Card className="bg-dark text-white">
      <Card.Img src="https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/09/2e/b4/092eb448-fc53-1cac-282f-fc73a837a3cc/4763b10e-9528-4309-91a2-6f079ff08e4d.png/1679x945sr.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><h1>All Apple Originals.</h1></Card.Title>
        <Card.Text>
  <h1>Exclusively on Apple TV+. Watch here and on the Apple TV app across your devices.</h1>
        </Card.Text>
        <Card.Text><Button>Start Free Trial</Button></Card.Text>
        <Card.Text><p>7 days free, then ₹ 99.00/month.</p></Card.Text>
        <Card.Text><p>
            <span>Or 3 months free when you buy an eligible Apple device.</span>
            <a href="#">Terms Apply</a>
            <span>Some titles coming later to Apple TV+.</span>
            </p></Card.Text>

      </Card.ImgOverlay>
    </Card>
    <div className="Dcerosel">
      <h4 className="CeroTags">Most Populer Now</h4>
    <Cero />
    <hr/>
    <h4 className="CeroTags">From Page to screen</h4>
    <Fetured_movie/>
    
    <hr/>
    <h4 className="CeroTags">Nonfiction Films & Series</h4>
    <Nofiction_Movie/>
    <hr/>
    <Single_page_pos/>
    <hr/>
    <h4 className="CeroTags">Kids & Family</h4>
    <p className="CeroTags">Discover shows and movies filled with wonder and imagination.</p>
    <Kids_movie/>
    <hr/>
    <h4 className="CeroTags">Fun for All</h4>
    <Fun_movie/>
    <hr/>
    </div>
    <BlackScreen/>
    <Accor/>
        </div>
    </div>)
}