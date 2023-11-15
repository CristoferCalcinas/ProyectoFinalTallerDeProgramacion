import React from 'react';
import { Box, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import EmailIcon from '@mui/icons-material/Email';

export default function SignInOptions() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '30px',
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                paddingTop: '25px',
                paddingBottom: '25px',
            }}
        >
            <Button
                variant="contained"
                color="primary"
                style={{
                    width: '400px',
                    padding: '15px',
                    backgroundColor: '#fff',
                    color: '#000',
                    borderRadius: '20px',
                    gap: '20px',
                }}
            >
                <GoogleIcon />
                Continuar con Google
            </Button>

            <Button
                variant="contained"
                color="primary"
                style={{
                    width: '400px',
                    padding: '15px',
                    backgroundColor: '#fff',
                    color: '#000',
                    borderRadius: '20px', columnGap: '20px',
                }}
            >
                <FacebookIcon />
                Continuar con Facebook
            </Button>

            <Button
                variant="contained"
                color="primary"
                style={{
                    width: '400px',
                    padding: '15px',
                    backgroundColor: '#fff',
                    color: '#000',
                    borderRadius: '20px', columnGap: '20px',
                }}
            >
                <AppleIcon />
                Continuar con Apple
            </Button>

            <Button
                variant="contained"
                color="primary"
                style={{
                    width: '400px',
                    padding: '15px',
                    backgroundColor: '#fff',
                    color: '#000',
                    borderRadius: '20px', columnGap: '10px',
                }}
            >
                <EmailIcon />
                Continuar con el correo electrónico
            </Button>


        </Box>
    );
}
