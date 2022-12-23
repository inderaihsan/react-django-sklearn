import Carousel from 'react-bootstrap/Carousel'; 


function IndividualIntervalsExample() {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src= {require('./peakpx (1).jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'grey', textShadow : '1px 1px', background : 333}}>Run run run!</h3>
          <p style={{color:'grey', textShadow : '1px 1px'}}>A penguin running in northern atlantic.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src= {require('./peakpx (2).jpg')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{color:'grey', textShadow : '1px 1px'}}>Second slide label</h3>
          <p style={{color:'grey', textShadow : '1px 1px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {require('./gambar baru.jpg')}
          alt="Third slide" 
          
        />
        <Carousel.Caption>
          <h3 style={{color:'grey', textShadow : '1px 1px'}}>Third slide label</h3>
          <p style={{color:'grey', textShadow : '1px 1px'}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default IndividualIntervalsExample;