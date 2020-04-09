import React from 'react';
import Button from '@material-ui/core/button'

export default function ButtonComp(props){

  const styles={
    button:{
      backgroundColor:'#7be3d2',
      color:'white',
      marginTop:'10%',
      width:'14%'
    }
  }

  return(
    <div style={{textAlign:'center'}}>
      <Button size='large' variant="contained" style={styles.button} href="About"> 
        {props.title}
      </Button>
    </div>
  );
}