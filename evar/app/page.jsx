// Bismillahirahmanirahim

"use client"




import { Container, Row,Col, Alert } from 'react-bootstrap'
import KitchenSinkExample from './components/card'
import BasicExample from './components/rupel';















function page() {




 
 
 
 

  
  return (
    <div>

     
<Container>
<Alert style={{justifyContent:'center',background:'white',margin:'7px'}}>
<h1>Yapım Aşamasında</h1>  



</Alert>



<BasicExample/>

<BasicExample/>

<BasicExample/>

<BasicExample/>

<BasicExample/>





</Container>


    </div>
  )
}

export default page;


