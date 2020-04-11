import React, { useState }from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';

export default function Form(){

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [cit, setCit] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const info = {
      fName: fName.trim(),
      lName: lName.trim(),
      email: email.trim(),
      cit: cit.trim(),
      dob,
      phone: phone.trim(),
      service
    }

    axios.post('http://localhost:8080/submit', {data: info})
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }

  const styles = {
    button:{
      padding:'1rem',
      color:'white',
      borderRadius:'5%',
      backgroundColor:'#7be3d2'
    },
    container:{
      padding:'2rem'
    }
  }

  return(
    <Container component='main' maxWidth="md" style={styles.container}> 
      <h1>Book A Consultation</h1>
      <p>If you'd like to speak with Samantha to discuss your immigration application and any unique needs you may have, please book a consultation with her. She will return your message within two business days. </p>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(event) => setFName(event.target.value)}
            variant="outlined"
            required
            fullWidth
            id="fName"
            label="Legal First Name"
            name="fName"
            autoComplete="fName"
            color='secondary'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
              onChange={(event) => setLName(event.target.value)}
              variant="outlined"
              required
              fullWidth
              id="lName"
              label="Legal Last Name"
              name="lName"
              autoComplete="lName"
            />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(event) => setPhone(event.target.value)}
            variant="outlined"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
              onChange={(event) => setEmail(event.target.value)}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(event) => setCit(event.target.value)}
            variant="outlined"
            required
            fullWidth
            id="cit"
            label="Citizenship"
            name="cit"
            autoComplete="cit"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
              onChange={(event) => setDob(event.target.value)}
              required
              variant="outlined"
              fullWidth
              id="dob"
              label="Date of Birth"
              name="dob"
              autoComplete="dob"
            />
        </Grid>
      </Grid>
      <Grid item xs={12}>
      `<TextField required variant="outlined" id="select" label="Service" select fullWidth onChange={event=>setService(event.target.value)}>
        <MenuItem value="Worker">Worker</MenuItem>
        <MenuItem value="Student">Student</MenuItem>
        <MenuItem value="Sponsor">Sponsor</MenuItem>
        <MenuItem value="Visitor">Visitor</MenuItem>
        <MenuItem value="Express">Express</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} style={{margin:'auto'}}>
        <button type='submit' style={styles.button}>Submit</button>
      </Grid>
      </form>
    </Container>
  );
}

