import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLoginForm from '../moleculas/InputLoginForm';
import SignInOptions from '../moleculas/SignInOptions';


export default function LoginForm() {
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
      <InputLoginForm />

      <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>OR</Typography>

      <SignInOptions />

    </Box>
  );
}