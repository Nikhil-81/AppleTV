import Card from 'react-bootstrap/Card';
export default function BlackScreen(){
    return (
        <div class="Black_screen">
        <Card className="bg-dark text-white">
          <Card.Img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDQ8PDw8PDw8NDQ0PDw8PDw0NFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0ODg0NDisZFRkrKzcrLSsrKystKysrKysrKystKysrKysrNysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDEUAAAAAAAAQBRAFEAVABUVAVAAVFAAAAAAAVAFEUAAEAAAAAAEUBFQFQAAAAAAAAAAAVFQFEAUAAABUUEBQQAAABFAQAFQAAAAAAAAAAAAAVABQAAAAAAAURQQABFABFBAAAAAAAAAAAAAAAAAAFQBQAAAAAUQAAABAVFAQAAAAAAAAAAAAAAAAABUAUAAAAAAAAAAABBQQAAAAAAAAAAAAAAAAABUAUAAAAADFRQQAAAAEAAAAAAAAAAAAAAAAAABRFAAAAAAAVFBAAAQAUBAAAAAAAAAAAAAAAAAAFAAAAAAFAEEABQRQBAAAAAAAAAAAAAAAAAAABQAAAAAAAUAEAAABAAFQAAAAAAAAAFQAAAAFAAAAAAAAUAAAQAAAAABFAAARQARUAVAAUBFAAAAAAAAABQAAAxUEEAUAAAAAAAAAAAAEVAUAAAAAAAAABUAUAAABUUHIoCQAAgAKAIAAACAAqUAUAAABYAJFAEUAEUQKQFBaACgD//2Q==" alt="Card image" />
          <Card.ImgOverlay>
            <img className="FooterDarkImg" src="https://tv.apple.com/assets/brands/TV_App_Logo-d343000dfd3ca454ca8705a7aa7dcf4f.png" />
            <Card.Text><h1>Watch Apple TV+ here or anywhere.</h1></Card.Text>
            <Card.Text>Find Apple TV+ on the Apple TV app, available on Apple devices, smart TVs and more.</Card.Text>
            <a href="#" >See all supported Device</a>

        <div className="AppleDevice">
            
    <div>    <Card.Img variant="top" src="https://tv.apple.com/assets/icons/product_landing_apple_tv_wht-9610e73e2ef117d35da65eed60d2624a.png" />
        <Card.Body>
          <Card.Text>
Apple TV
          </Card.Text>
        </Card.Body>
      </div>

      <div>    <Card.Img variant="top" src="https://tv.apple.com/assets/icons/product_landing_iPhone_wht-0adcded885905e1a22bfc7ae9bf45fa8.png" />
        <Card.Body>
          <Card.Text>
            i Phone
          </Card.Text>
        </Card.Body>
      </div>

      <div>    <Card.Img variant="top" src="https://tv.apple.com/assets/icons/product_landing_iPad_wht-ac93596ed7aeb5e1c15ba18bcb7bfd13.png" />
        <Card.Body>
          <Card.Text>
            i Pad
          </Card.Text>
        </Card.Body>
      </div>

      <div>    <Card.Img variant="top" src="https://tv.apple.com/assets/icons/product_landing_mac_wht-37e6f73080a15fe8a35b85e7ba8f5468.png" />
        <Card.Body>
          <Card.Text>
            Mac
          </Card.Text>
        </Card.Body>
      </div>

      <div>    <Card.Img variant="top" src="https://tv.apple.com/assets/icons/product_landing_airplay_wht-f348507fa5bdc6b005b126f0654aa663.png" />
        <Card.Body>
          <Card.Text>
            Air Play
          </Card.Text>
        </Card.Body>
      </div>
      </div>
      <Card.Text><h1>See it on your big screen</h1></Card.Text>
      <Card.Text>
      <a href="#">Set up your device</a>
      </Card.Text>
      <Card.Text>
      <a href="#">Explore compatible devices</a>
      </Card.Text>
        <div className='connectingDevice' >             
    <div>    <Card.Img variant="top" src="https://tv.apple.com/assets/icons/banner_tv_lrg_wht-e0ef12292435df4d9416312f322dbe32.png" />
        <Card.Body>
          <Card.Text>Streaming Devices</Card.Text>
        <p>Roku</p>
        <p>Fire TV</p>
        <p>Google TV</p>
        <p>Android TV</p>
        </Card.Body>
      </div>

      
      <div>    <Card.Img variant="top" src="https://tv.apple.com/assets/icons/banner_tv_lrg_wht-e0ef12292435df4d9416312f322dbe32.png" />
        <Card.Body>
          <Card.Text>Smart TVs</Card.Text>
          <p>Samsung</p>
          <p>LG</p>
          <p>Sony</p>

        </Card.Body>
        </div>

      <div>    <Card.Img variant="top" src="https://tv.apple.com/assets/icons/banner_controller_lrg_wht-5eca7993879258c2ff5e8425055643b6.png" />
        <Card.Body>
          <Card.Text>
            Gaming Consoles
          </Card.Text>
          <p>PlayStation</p>
          <p>Xbox</p>

        </Card.Body>
      </div>

      </div>
      <Card.Text><p>Device availability varies by country or region.</p></Card.Text>
          </Card.ImgOverlay>
        </Card>
        </div>
    )
}