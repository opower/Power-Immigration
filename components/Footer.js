import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer (){

  const [email, setEmail] = useState();

  const emailSubmit = (event) => {
    event.preventDefault();
    console.log(email)
  }

  const styles={
    container:{
      backgroundColor:'#737373',
      padding:'1rem',
      color:'white',
      height:120,
      display:'flex',
      justifyContent:'space-around',
      fontFamily:'Roboto Condensed',
    },
    copy:{
      backgroundColor:'#4d4d4d',
      textAlign:'center',
      color:'white',
      fontFamily:'Roboto Condensed',
      paddingTop:'1rem'
    },
    icon:{
      width:40,
      height:40,
      marginRight:5,
      color:'white'
    },
    button:{
      backgroundColor:'cadetblue',
      color:'white',
      border:'0px solid cadetblue',
      padding:'.5rem',
      fontSize:'.7rem'
    },
    input:{
      outline: 'none',
      border:'none',
      backgroundColor: '#e6e6e6',
      padding:'.5rem'
    }
  }

  return(
      <><div style={styles.container}>
        <div>
          <h4>Contact Us</h4>
          (604)-753-8616 
          <br/>
          <a href='mailTo:info@powerimmigration.ca' style={{color:'white', textDecoration:'none'}}>info@powerimmigration.ca</a>
        </div>
        <div>
          <h4>Social Media</h4>
          <div style={{textAlign:'center'}}>
            <a href='https://www.linkedin.com/in/samantha-power-04932289/' target="_blank"><FontAwesomeIcon style={styles.icon} icon={faLinkedin}/></a>
            <a href='https://www.facebook.com/powerimmigration/' target="_blank"><FontAwesomeIcon style={styles.icon} icon={faFacebookSquare} /></a>
          </div>
        </div>
        <div>
          <h4>Signup For Our Newsletter</h4>
          <form onSubmit={emailSubmit}>
            <input style={styles.input} type='email' placeholder='Email' required onChange={event => setEmail(event.target.value)}/>
            <button style={styles.button}type='submit'>Submit</button>
          </form>
        </div>
      </div>
      <div style={styles.copy}>
         <h4 style={{margin:0, paddingBottom:'1rem'}}>Copyright © Made By Olivia {new Date().getFullYear()}</h4>
      </div></>
  );

}