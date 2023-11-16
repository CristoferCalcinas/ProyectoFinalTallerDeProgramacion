import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SingIpInput from '../moleculas/SingInInput';
import SignInOptions from '../moleculas/SignInOptions';


export default function LoginInForm() {
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
      <SingIpInput />

      <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>OR</Typography>

      <SignInOptions />

    </Box>
  );
}