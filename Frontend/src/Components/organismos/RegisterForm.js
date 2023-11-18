import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputRegisterForm from '../moleculas/InputRegisterForm';
import SignInOptions from '../moleculas/SignInOptions';


export default function RegisterForm() {
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
      <InputRegisterForm />

      <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>OR</Typography>

      <SignInOptions />

    </Box>
  );
}