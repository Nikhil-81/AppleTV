// export default function QandA(){

// }

import Accordion from 'react-bootstrap/Accordion';
import {Adata} from "../data/accordian"
import {useState} from "react"
export default function Accor() {
  const [data,setdata] =useState(Adata)
  // console.log(data)
  return (
    <div className="Accordingcomp">

    <Accordion>
        {data.map((el)=>(<Accordion.Item eventKey={el.id} >
        <Accordion.Header>{el.Q}</Accordion.Header>
        <Accordion.Body>{el.A}</Accordion.Body>
      </Accordion.Item>))}
    </Accordion>
    </div>
  );
}

