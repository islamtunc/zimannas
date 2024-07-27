// Bismillahirahmanirahim

"use client"

import React from 'react'
import { Button } from 'react-bootstrap'

function page() {











function Bisine() {

  fetch("/api",{

    method:'POST',
    
    body:JSON.stringify("Selam Aleykum")
    }).then(res=>(console.log(res)))
}
  return (
    <div>







      <Button onClick={Bisine}>..........</Button>
    </div>
  )
}

export default page