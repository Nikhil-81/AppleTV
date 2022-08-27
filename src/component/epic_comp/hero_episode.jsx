import Card from 'react-bootstrap/Card';
import { Button,Stack } from 'react-bootstrap';

export default function Hero_back({data,season_num,epi_num}) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://is3-ssl.mzstatic.com/image/thumb/LSIJC_krOTOl-Nk03KDQsg/1679x945.webp" alt="Card image" />
      <Card.ImgOverlay >
       <div class="Style_Hero_OverLay episode_block">
<div>
  <Stack className='Style_button_stack'>
<p>7 Days Free ,then 4.99/month.</p>
<Button variant="light">Pay free Episodes</Button>
  </Stack>
</div>
<div className='Style_hero_dec' >

        <Card.Text>
        <Card.Text>S{season_num }E{epi_num }:Season finale. Baba and Edo lead their armies into an epic battle that builds to an intense face-off between the brothers.</Card.Text>
        </Card.Text>
</div>
       </div>
      </Card.ImgOverlay>
    </Card>
  );
}     

