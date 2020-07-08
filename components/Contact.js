import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';


export default function Contact(){

  const styles = {
    button:{
      backgroundColor:'cadetblue',
      color:'white',
      padding:'1rem 2rem',
      border:'none',
      fontSize:'1.05em',
      fontFamily:'Roboto Condensed',
      borderRadius:'5%',
      marginBottom:'1rem'
    }
  }

  return(
    <div style={{textAlign:'center', paddingTop:'4rem'}}>
      <Link href="/book"><Button style={styles.button}>LET'S TALK</Button></Link>
      <p style={{fontSize:'1rem'}}>Let us help you navigate your unique immigration path with ease. </p>
      <p style={{fontSize:'1rem'}}>Book your consultation with Power Immigration & Consulting today, or contact us at:</p>
      <p style={{fontSize:'.9rem'}}>778-960-9022</p>
      <p style={{fontSize:'.9rem', overflowWrap: 'break-word'}}>samantha@powerimmigration.ca</p>
    </div>
  );
}