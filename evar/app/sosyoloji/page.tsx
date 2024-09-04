// Bismillahirahmanirahim



import React from 'react'
import Example from '../psikoloji/nav'
import KitchenSinkExample from '../components/card'
import { Alert, Container,Col,Row } from 'react-bootstrap'
import AdvancedExample from '../components/mmrupel'

function page() {
  return (
    <div>



 

      <Container> 
        <br></br>
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

        

        

        <AdvancedExample/>
         </Container>
    
    </div>
  )
}

export default page