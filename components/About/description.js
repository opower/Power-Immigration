import React from 'react';

export default function Description(){

  const styles={
    container:{
      display:'flex',
      justifyContent:'space-between',
      padding:'4rem 3rem'
      },
    center:{
      alignSelf: 'center',
    },
    p:{
      maxWidth:'60%',
      letterSpacing:.8
    }
  }

  return(
    <div className='description' style={styles.container}>
      <div style={styles.center}>
        <p style={{textAlign:'center', color:'#404040'}}>Est. 2017</p>
        <h2 style={{fontSize:'1.5rem'}}>Why Power Immigration and Consulting?</h2>
      </div>
      <p style={styles.p}>We know that the Canadian immigration process can be overwhelming and difficult to navigate alone.<br/><br/>
      That is why our founding philosophy is to be a trusted guide for our clients, and to take away as much of their stress as possible as they go through the process. <br/><br/>
      We work with all immigration categories, ranging from temporary visitors to those seeking permanent residency. <br/><br/>
      What also sets us apart? We are certified and trained to help you prepare for any language exam you may need to take. Language exams can often be a crucial component of an immigration application.</p>
    </div>
  );
}