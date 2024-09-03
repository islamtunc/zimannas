// Bismillahirahmanirahim



import React from 'react'
import Example from '../psikoloji/nav'
import KitchenSinkExample from '../components/card'
import { Alert, Container,Col,Row } from 'react-bootstrap'

function page() {
  return (
    <div>



<Alert>.....................</Alert>
      <Example/>

      <Container> 
        
        <Row>

          <Col>
    <KitchenSinkExample nav="nivis "/>
    <br></br><br></br>
    <KitchenSinkExample nav="nivis "/>
    <br></br><br></br>
    <KitchenSinkExample nav="nivis "/>
    <br></br><br></br>
    <KitchenSinkExample nav="nivis "/>
</Col>





<Col>
    <KitchenSinkExample nav="nivis "/>
    <br></br><br></br>    
    <KitchenSinkExample nav="nivis "/>
    <br></br><br></br>
    <KitchenSinkExample nav="nivis "/>


    <br></br><br></br>

    <KitchenSinkExample nav="nivis "/>
</Col>


        </Row>
         </Container>
   
    </div>
  )
}

export default page