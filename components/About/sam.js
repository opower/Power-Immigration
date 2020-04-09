import React from 'react';
import Avatar from '@material-ui/core/avatar';
import img from '../../pages/assets/avatar.png'

export default function Sam(){

  const styles= {
    container:{
      textAlign:'center',
      backgroundColor:'#8c8c8c',
      padding:'5rem 1rem',
    },
    avatar:{
      margin:'auto',
      minWidth:200,
      minHeight:200,
      border:'5px solid #7be3d2'
    },
    p:{
      maxWidth:'80%',
      margin:'auto',
      marginTop:'2.5rem',
      letterSpacing:.8,
      color:'white'
    }
  }

  return(
    <div style={styles.container}>
      <Avatar alt='Samantha Power' src={img} style={styles.avatar}/>
      <h2 style={{color:'white'}}>Samantha Power, RCIC</h2>
      {/* <div className='small white' style={{textAlign:'center', color:'#7be3d2'}}>♦</div> */}
      <hr></hr>
      <p style={styles.p}>I am a Vancouver-based RCIC (Regulated Canadian Immigration Consultant) with an intimate knowledge of Canada, having been raised here. Aside from my license in Canadian immigration consulting, I have a Bachelor’s Degree in International Studies from Simon Fraser University in Burnaby, British Columbia and a Bachelor’s Degree in Latin American Studies from the University of Veracruz in Xalapa, Mexico.<br/><br/>
      My travels and work experiences in a multicultural field have allowed me to develop a sensitivity to nuances and differences across many cultures. I have also learned a keen sense of how to overcome language barriers. These skills have become immensely useful in my career as an immigration consultant, as many of my clients may not have strong English skills, and each bring their own unique cultural perspectives.</p>
    </div>
  );
}