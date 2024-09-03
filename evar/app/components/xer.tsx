// Bismillahirahmanirahim



import Carousel from 'react-bootstrap/Carousel';

import Image from 'react-bootstrap/Image';
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src='https://www.kulturportali.gov.tr/contents/images/09022013_23cee22b-0b23-4f7c-bdae-99441f4a9297.jpg'/>
        <Carousel.Caption>
          <h3>First slide </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src='https://www.kulturportali.gov.tr/contents/images/09022013_23cee22b-0b23-4f7c-bdae-99441f4a9297.jpg'/>
      <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

      <Image src='https://www.kulturportali.gov.tr/contents/images/09022013_23cee22b-0b23-4f7c-bdae-99441f4a9297.jpg'/>
      <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;