import React, { useState }from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import image from '../pages/assets/texture1.png';
import MaskedInput from 'react-text-mask';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

export default function Form(){

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [cit, setCit] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [res, setRes] = useState('');
  const [temp, setTemp] = useState('');
  const [permanent, setPermanent] = useState('');
  const [msg, setMsg] = useState(null);
  const [desc, setDesc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });

    setMsg(true);
    document.getElementById('consulation').reset();
    let status = temp === '' ? permanent : temp;

    const info = {
      fName: fName.trim(),
      lName: lName.trim(),
      email: email.trim(),
      cit: cit.trim(),
      dob,
      phone: phone.trim(),
      res,
      status,
      desc
    }

    axios.post('http://localhost:8080/submit', {data: info})
    .then(res => console.log(res))
    .catch(err => console.log(err))

    setRes(null);
    setTemp('');
    setPermanent('');

  }

  const styles = {
    button:{
      padding:'1rem',
      color:'white',
      backgroundColor:'cadetblue',
      width:'50%',
      fontSize:'1.1rem',
      fontFamily:'Roboto Condensed'
    },
    container:{
      padding:'2.5rem',
      backgroundColor:'white',
    }
  }

  return(
    <div style={{background: `url(${image})`}}>
      <Container component='main' maxWidth="md" style={styles.container}> 
        <h1 style={{color:'#404040'}}>Book A Consultation</h1>
        <p style={{marginBottom:'2.5rem'}}>If you'd like to speak with Samantha to discuss your immigration application and any unique needs you may have, please book a consultation with her. She will return your message within two business days. </p>
        {msg !== null ? <h2>Your Consultation Has Been Requested</h2> : null}
        <form id='consulation' onSubmit={handleSubmit} >
        <Grid container spacing={2} style={{marginBottom:'1.5rem'}}>
          <Grid item xs={12} sm={6} >
            <TextField
              onChange={(event) => setFName(event.target.value)}
              variant="outlined"
              required
              fullWidth
              id="fName"
              label="Legal First Name"
              name="fName"
              autoComplete="fName"
              color='cadetblue'
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
        <Grid container spacing={2} style={{marginBottom:'1.5rem'}}>
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
              InputProps={{
                inputComponent: TextMaskCustom,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
                onChange={(event) => setEmail(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                type='email'
                label="Email Address"
                name="email"
                autoComplete="email"
              />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{marginBottom:'1.5rem'}}>
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
                type='date'
                label="Date of Birth"
                name="dob"
                InputLabelProps={{
                  shrink: true,
                }}
                autoComplete="dob"
              />
          </Grid>
        </Grid>
        <Grid container style={{marginBottom:'2rem'}} >
          <Grid item xs={12} >
            <TextField required variant="outlined" id="select" label="Residency" style={{backgroundColor:'white'}} select fullWidth onChange={event=>setRes(event.target.value)}>
              <MenuItem value="Temporary">Temporary Resident</MenuItem>
              <MenuItem value="Permanent">Permanent Resident</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} style={{marginTop:'1rem'}} >
            {res === 'Temporary' ? <TextField required variant="outlined" style={{backgroundColor:'white'}} id="select" label="Temporary Resident" select fullWidth onChange={event=>setTemp(event.target.value)}>
                <MenuItem value="Visit">Visit</MenuItem>
                <MenuItem value="Study">Study</MenuItem>
                <MenuItem value="Work">Work</MenuItem>
              </TextField> : null }
          </Grid>
          <Grid item xs={12} style={{marginBottom:'1rem'}}>
            {res === 'Permanent' ?  <TextField required variant="outlined" style={{backgroundColor:'white'}} id="select" label="Permanent Resident" select fullWidth onChange={event=>setPermanent(event.target.value)}>
                <MenuItem value="Skilled Worker">Skilled Worker</MenuItem>
                <MenuItem value="Family Class Sponsorship">Family Class Sponsorship</MenuItem>
              </TextField> : null }
          </Grid>
          <Grid item xs={12}>
            <TextField 
            variant='outlined' 
            required 
            id="select" 
            label="Description of Case" 
            style={{backgroundColor:'white', marginBottom:'.5rem', margintTop:'1rem'}} 
            fullWidth
            multiline
            rows={5}
            onChange={event=>setDesc(event.target.value)}/>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{textAlign:'center'}}>
          <Button type='submit' style={styles.button}>Book Consultation</Button>
        </Grid>
        </form>
      </Container>

    </div>
  );
}

