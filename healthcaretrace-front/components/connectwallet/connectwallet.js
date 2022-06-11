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
import styles from '../../components/connectwallet/connectwallet.module.css'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const theme = createTheme();

const ConnectWallet = () => {
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
                letterSpacing: "0.1em", 
                marginLeft: "20px"}} >
              Login to Healthcare Trace
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <Typography component="h1" variant="h5" 
                    sx={{ margin: "0",
                    textAlign: "center",
                    fontFamily: "cursive",
                    fontWeight: "normal", 
                    marginTop: "3rem",
                    marginBottom: "3rem",
                    fontSize: "1.5rem",
                    letterSpacing: "0.1em", 
                    marginLeft: "20px"}} >
                In our website, you can check the traceability of whatever medical product you want, you can as well register a transformation, a transfer , or a new batch of an item ...
            </Typography>
              <WalletMultiButton className={styles.walletbutton} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default ConnectWallet