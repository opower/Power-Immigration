import React from 'react';
import NavMenu from '../components/NavMenu';
import image from './assets/photo1.jpg';
import About from '../components/About';
import Footer from '../components/Footer'
import ModalComp from '../components/Modal';


export default function Index () {
  
  const styles = {
    background :{
      background: `url(${image})`,
      height: '100vh',
      width:'100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      opacity:'.95',
      paddingTop:'30vh',
      marginTop: '-150px',
      position: 'relative',
      zIndex:'-1'

    },
    center:{
      textAlign:'center',
      color:'white',
      letterSpacing:2,
      fontSize:'1.1rem',
      margin:'auto'
    },
    separator: {
      content:' ',
      backgroundColor:'white',
      width:'20%'
    },
    button:{
      borderRadius:'50%',
      padding:'1rem',
      marginTop:'9rem'
    }
  }
  return(
    <>
      <NavMenu/>
      <div style={styles.background}>
        <div style={styles.center}>
          <h1>POWER IMMIGRATION AND CONSULTING</h1>
          <div className='separator'>♦</div>
          <h2 style={{fontFamily:'Roboto Condensed', color:'white'}}>Create Your Unique Canadian Experience</h2>
          <style jsx>{`
            h1{
              text-shadow: 0px 0px 25px #000000;
            }
          
          `}</style>
        </div>
      </div>
      <div>
        <About/>
        {/* <ModalComp/> */}
        <Footer/>
      </div>
    </>
  );

}