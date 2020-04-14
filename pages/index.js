import React from 'react';
import NavMenu from '../components/NavMenu';
import image from './assets/vancouver.jpg';
import About from '../components/About';
import Footer from '../components/Footer'
import ModalComp from '../components/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


export default function Index () {
  
  const styles = {
    background :{
      background: `url(${image})`,
      height: '100vh',
      width:'100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      opacity:'.95'

    },
    center:{
      textAlign:'center',
      marginTop:'18vh',
      color:'white',
      fontFamily:'Lato',
      letterSpacing:2,
      fontSize:'1.1rem'
    },
    separator: {
      content:' ',
      backgroundColor:'white',
      width:'20%'
    },
    chevron:{
      width:30,
      height:30,
      color:'#7be3d2'
    },
    button:{
      borderRadius:'50%',
      padding:'1rem',
      marginTop:'9rem'
    }
  }
  return(
    <><div style={styles.background}>
      <NavMenu/>
      <div style={styles.center}>
        <h1>POWER IMMIGRATION AND CONSULTING</h1>
        <div className='separator'>♦</div>
        <h2 style={{fontFamily:'Roboto Condensed', color:'white'}}>Create Your Unique Canadian Experience</h2>
      </div>
    </div>
    <div>
      <About/>
      <ModalComp/>
      <Footer/>
    </div></>
  );

}