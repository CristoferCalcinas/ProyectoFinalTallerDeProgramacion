import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextInput from '../atomos/TextInput';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import EmailIcon from '@mui/icons-material/Email';

export default function Page() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        minHeight: '100vh',
        backgroundColor: '#444',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
          padding: '20px',
          borderRadius: '20px',
          marginRight: '10px',
        }}
      >
        <Typography variant="h4" style={{ marginBottom: '20px', color:'white'}}>SING UP</Typography>
        <TextInput label={'Name'} margin="none" width={'400px'} background={'#fff'} />
        <TextInput label={'Email'} margin="normal" width={'400px'} background={'#fff'}/>
        <TextInput label={'Password'} margin="dense" width={'400px'} background={'#fff'}/>

        <Button
          variant="contained"
          color="secondary"
          startIcon={<Typography variant="h6"></Typography>}
          style={{ width: '400px', marginTop: '12px', backgroundColor: '#000', color: '#fff' }}
        >
          SING UP
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          marginLeft: '10px',
        }}
      >
        <Typography variant="h6">OR</Typography>

        <form>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '10px', alignItems: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              style={{ width: '400px', padding: '15px', marginBottom: '10px', backgroundColor: '#fff', color: '#000', borderRadius: '20px' }}
            >
              Continuar con Google
              <GoogleIcon style={{ marginLeft: '10px' }} />
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ width: '400px', padding: '15px', marginBottom: '10px', backgroundColor: '#fff', color: '#000', borderRadius: '20px' }}
            >
              Continuar con Facebook
              <FacebookIcon style={{ marginLeft: '10px' }} />
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ width: '400px', padding: '15px', marginBottom: '10px', backgroundColor: '#fff', color: '#000', borderRadius: '20px' }}
            >
              Continuar con Apple
              <AppleIcon style={{ marginLeft: '10px' }} />
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ width: '400px', padding: '15px', marginBottom: '10px', backgroundColor: '#fff', color: '#000', borderRadius: '20px' }}
            >
              Continuar con el correo electrónico
              <EmailIcon style={{ marginLeft: '10px' }} />
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}