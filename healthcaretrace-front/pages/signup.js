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
import { Select, MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import CreatePosition from '../client/endpoints/createPosition/createPosition';
import { removeCookies } from 'cookies-next'
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import createUser from '../client/endpoints/createuser/createUser';


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
  
const signup = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const submitCreateUser = async () => {
    //if (!publicKey) throw new WalletNotConnectedError();

    await CreatePosition(formValues.name, formValues.code, "", wallet);
  }

  const positionOptions = [{key: 1, value: "option 1"},
                            {key: 2, value: "option 2"},
                            {key: 3, value: "option 3"}]

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const defaultFormValues = {
    name: "",
    code:  "",
    position: "",
  }

  const [formValues, setFormValues] = useState(defaultFormValues);
  
    
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
              onChange={handleInputChange}
              value={formValues.name}
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
              onChange={handleInputChange}
              value={formValues.code}
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
            name="position"
            onChange={handleInputChange}
            value={formValues.position}
            placeholder='Select your location'
            label="Position"
             >
               {positionOptions.map((pos => {
                 return (<MenuItem value={pos.key}>{pos.value}</MenuItem>)
               }))}
              </Select>


            </FormControl>
            
            <FormControlLabel
              style= {stylingform}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> 
            <div onClick={submitCreateUser} className={styles.createButton}> Create Account </div>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  )
}

export default signup