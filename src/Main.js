import React from 'react';
import { Container, Row, Col,Jumbotron } from 'react-bootstrap';
import Tattoo from './tattoo2.png';
import work1 from './work1.jpg';
import work2 from './work2.jpg';
import work3 from './work3.jpg';
import work4 from './work4.jpg';
import work5 from './work5.jpg';
import work6 from './work6.jpg';



export default class Main extends React.Component {


    render(){


  
  

        
      return (

           <div >

<Jumbotron style={{color:'white',background:`url(${Tattoo})`,width:'100%',backgroundRepeat:'no-repeat',backgroundSize:'cover',marginTop:'-4px'}}>
  <h1 style={{color:'orange'}}>High Quality Tattoo Studio</h1>
<br /> <br /> <br /> <br /> <br />
<br /> <br /> <br /> <br /> <br />
<br /> <br /> <br /> <br /> <br />

</Jumbotron>
<div style={{backgroundColor:'black',color:'white',marginTop:'-35px'}}>
<Container fuild >
    <Row>
        <Col style={{textAlign:'left'}}>
        <h4>Welcome to</h4>
        <h2 style={{fontWeight:'bold'}}>SAMSARA Tattoo Studio</h2>
        </Col>
        <Col style={{textAlign:'right'}}>
        <h4>Need a good Tattoo?</h4>
        <h2 style={{fontWeight:'bold'}}> <a href="tel:02476764203" style={{color:'white',textDecoration:'none'}}>024 7676 4203</a></h2>
        <p>
        106 Binley Rd, Bull's Head Ln, Coventry CV3 1FQ
        </p>
        </Col>
    </Row>
    <h2>See our Work</h2>
    <Row>
    <div id="portfolio">
            <div class="container-fluid p-0">
                <div class="row no-gutters">
                    <div class="col-lg-4 col-sm-6">
                        <img src={work1} alt="tattoo 1" width="100%"></img>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                        <img src={work2} alt="tattoo 2" width="100%"></img>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                        <img src={work3} alt="tattoo 3" width="100%"></img>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                        <img src={work4} alt="tattoo 4" width="100%"></img>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                        <img src={work5} alt="tattoo 5" width="100%"></img>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                        <img src={work6} alt="tattoo 6" width="100%"></img>
                        </div>
                        </div>
                        </div>
                        </div>
                        

    </Row>
    <h5>See more on <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/SamsaraTattooStudioBinley/">Facebook</a></h5>
</Container>
</div>
  
               </div>
      )
    }
}
