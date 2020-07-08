import React from 'react';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import Template from '../components/Template';
import image from './assets/computer.png';
import Contact from '../components/Contact';
import Grid from '@material-ui/core/Grid';
import background from './assets/texture1.png';

export default function Service(){

  const styles={
    image:{
      padding:'2rem',
      height:'auto',
      
      float:'left'
      
    },
    center:{
      textAlign:'center',
      color:'#cadetblue',
      letterSpacing:2,
      fontSize:'1.1rem',
      width:'65%',
      margin:'auto'
    },
  }

  return(
    <>
    <NavMenu color={'cadetblue'}/>
      <Grid container spacing={2} style={{width:'calc(100% + 8px)'}}>
        <Grid item xs={12} sm={9} style={{backgroundColor:'white', padding:'2rem', zIndex:'-1'}}>
        <div style={styles.center}>
          <h1  style={{color:'#404040'}}>Services</h1>
          {/* <div className='service'>♦</div> */}
        </div>
          <Template obj={consultation}/>
          <img className='image' src={image} alt='office' style={styles.image}/>
          <br></br>
          <Template obj={file}/>
          <br></br>
          <Template obj={review}/>
          <br></br>
          <Template obj={ielts}/>
        </Grid>
        <Grid item xs={12} sm={3} style={{background: `url(${background})`}}>
          <Contact/>
        </Grid>
        </Grid>
        <br></br>
      <Footer/>
    </>
  );
}

let file = {
  title: 'File Preparation',
  headline: 'Canada is one of the most desirable countries for students looking to learn english and study.',
  sum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum facilisis volutpat. Phasellus vulputate lectus magna, ultrices venenatis eros imperdiet feugiat. Proin tristique pretium leo, sit amet suscipit lectus sagittis in. Aliquam ut enim accumsan, tristique lectus in, molestie quam. Vivamus ut tortor ut elit tristique molestie porta vel ligula. Pellentesque orci erat, pharetra sed nisi ut, malesuada accumsan neque. In pellentesque metus lacinia ornare aliquam.',
}

let consultation = {
  title:'Consultation',
  headline:'Canada consistently tops world surveys of workplace satisfaction and safety.',
  sum:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum facilisis volutpat. Phasellus vulputate lectus magna, ultrices venenatis eros imperdiet feugiat. Proin tristique pretium leo, sit amet suscipit lectus sagittis in. Aliquam ut enim accumsan, tristique lectus in, molestie quam. Vivamus ut tortor ut elit tristique molestie porta vel ligula. Pellentesque orci erat, pharetra sed nisi ut, malesuada accumsan neque. In pellentesque metus lacinia ornare aliquam.',
}

let ielts = {
  title:'IELTS and CELPIP Review',
  headline:'Language is a crucial part of many immigration applications. Let us help you feel confident about taking your IELTS exam',
  sum:'At Power Immigration and Consulting, we have a team of trained professionals to help you with your language needs. We can help you with IELTS test prep, speaking with confidence, reading and writing effectively, and test time management. IELTS test preparation sessions can be booked privately or in groups up to five students.',
}

let review = {
  title: 'File Review',
  headline: 'Canada is one of the most desirable countries for students looking to learn english and study.',
  sum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum facilisis volutpat. Phasellus vulputate lectus magna, ultrices venenatis eros imperdiet feugiat. Proin tristique pretium leo, sit amet suscipit lectus sagittis in. Aliquam ut enim accumsan, tristique lectus in, molestie quam. Vivamus ut tortor ut elit tristique molestie porta vel ligula. Pellentesque orci erat, pharetra sed nisi ut, malesuada accumsan neque. In pellentesque metus lacinia ornare aliquam.',
}

