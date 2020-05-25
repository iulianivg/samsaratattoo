import React from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from './logo.jpg';
export default class Header extends React.Component {


    render(){


  
  

        
      return (

           <div >

<Navbar style={{background:'black',display:'block'}} variant="dark" className="m-auto">
    <Navbar.Brand href="/"> 
    <img src={Logo} alt="logo" width="50%"  /></Navbar.Brand>
{/* <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>

    </Nav> */}
    {/* <Nav className="mr-auto">
        <Nav.Link href="#">    <img src={Facebook} width="50" />
</Nav.Link>

</Nav> */}
  </Navbar>

  
               </div>
      )
    }
}
