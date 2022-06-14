import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
import logo from '/images/scrum2.png'
import bg from '/images/Blockchain.jpg'
import { fontSize, fontWeight, width } from '@mui/system';
import styles from '../components/createuser/Createuser.module.css'
import { useState } from 'react'
import cookieCutter from 'cookie-cutter';
import {useRouter} from 'next/router'
import getWallet from '../client/wallet/getWallet.js'
import { Select, MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const theme = createTheme();
const stylingform = {
    margin: "20px"
  }  

  const options = [
    {
        value: "add11",
        label: "some addresse 1"
    },
    {
        value: "add2",
        label: "some addresse 2"
    }
  ]  
  
const login = () => {
    const router = useRouter();
    const { connected } = getWallet()
    if (connected ) {
      cookieCutter.set('wallet', connected);
      //router.push('/signup');
    } else {
      document.cookie = 'wallet=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      localStorage.removeItem("wallet");
      sessionStorage.removeItem("wallet");
      //router.push("/connectTowallet"); 
    }  
  return (
    <ThemeProvider theme={theme}>
    <header className='navbarHeader'>
      <nav className='nav'>
              <div className='logo'>
                  <Image
                      src={logo}
                      alt="Logo"
                      width="40px"
                      height="40px"
                  />
                  <div> <h1 className='logotext'> Healthcare Trace </h1> </div>
              </div>
      </nav>
  </header>  
    <Grid container component="main" sx={{ height: '93vh' }}>
      <CssBaseline />
      <Grid 
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      > </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square
          sx = {{
              width: "50%",
          }}>
        <Box
          sx={{
            paddingTop: "60px",
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#ED6400', width: "100px", height: "100px",  }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" 
              sx={{ margin: "0",
              textAlign: "center",
              fontFamily: "cursive",
              fontWeight: "bolder", 
              fontSize: "2.5rem",
              marginTop: "2rem",
              letterSpacing: "0.1em", 
              marginLeft: "20px"}} >
            To use HealthCare Trace as a medical supply chain manager, create your account first !
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              style= {stylingform}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Enter your name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              style= {stylingform}
              margin="normal"
              required
              fullWidth
              name="code"
              label="Enter your code"
              id="code"
              autoComplete="code"
            />
            <FormControl
              fullWidth
              style={stylingform}
            >
            <InputLabel id="demo-multiple-name-label">Choose your location</InputLabel>
            <Select
            
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            placeholder='Select your location'
            label="some shit"
             >
                <MenuItem value={1}>option 1</MenuItem>
                <MenuItem value={2}>option 2</MenuItem>
                <MenuItem value={3}>option 3</MenuItem>
              </Select>


            </FormControl>
            
            <FormControlLabel
              style= {stylingform}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> 
            <div className={styles.createButton}> Create Account </div>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  )
}

export default login