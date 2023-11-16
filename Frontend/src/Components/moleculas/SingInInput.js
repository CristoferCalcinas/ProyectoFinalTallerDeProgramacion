import { Box, Button, Typography } from '@mui/material'
import TextInput from '../atomos/TextInput'

export default function SingInInput() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                borderRadius: '20px',
                // bgcolor: 'red',
                gap: '20px',
            }}

        >
            <Typography variant="h4" style={{ color: 'white' }}>
                SING IN
            </Typography>


            <TextInput label={'Email'} margin="none" width={'400px'} />
            <TextInput label={'Password'} margin="normal" width={'400px'} />

            <Button
                variant="contained"
                color="secondary"
                style={{ width: '400px', marginTop: '12px', backgroundColor: '#000', color: '#fff', borderRadius: '10px', height:'50px' }}
            >
                SIGN IN
            </Button>

            <Button
                variant="contained"
                color="secondary"
                style={{ width: '400px', marginTop: '12px', backgroundColor: '#000', color: '#fff', borderRadius: '10px', height:'50px' }}
            >
                SIGN UP
            </Button>
        </Box>
    )
}
