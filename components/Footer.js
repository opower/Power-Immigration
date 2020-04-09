import React from 'react';

export default function Footer (){

  const styles={
    container:{
      backgroundColor:'#404040',
      padding:'1rem',
      color:'white',
      height:125,
      display:'flex',
      justifyContent:'space-around',
      fontFamily:'Roboto Condensed',
    }
  }

  return(
      <div style={styles.container}>
        <div>
          <h4>Contact Us</h4>
          (604) 753-8616 
          <br/>
          <a href='mailTo:info@powerimmigration.ca' style={{color:'white', textDecoration:'none'}}>info@powerimmigration.ca</a>
        </div>
        <div>
          <h4>Links</h4>
        </div>
        <div>
          <h4>Social Media</h4>
        </div>
      <h4>Copyright © Made By Olivia {new Date().getFullYear()}</h4>
      </div>
  );

}