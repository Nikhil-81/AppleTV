import Card from 'react-bootstrap/Card';
import { Button,Stack } from 'react-bootstrap';

export default function Hero_back({data}) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={data.heroimage} alt="Card image" />
      <Card.ImgOverlay>
       <div class="Style_Hero_OverLay">
<div>
  <Stack className='Style_button_stack'>

<Button variant="light">Pay free Episodes</Button>
<Button variant="light">Start Free Trial</Button>
<Button variant="light">+Add up to Next</Button>
  </Stack>
</div>
<div className='Style_hero_dec' >

        <Card.Text>
         {data.decreption}
        <Card.Text>{data.gener+"  "}{data.release}</Card.Text>
        </Card.Text>
</div>
       </div>
      </Card.ImgOverlay>
    </Card>
  );
}     

