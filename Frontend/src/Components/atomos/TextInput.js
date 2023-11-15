import TextField from '@mui/material/TextField';

const TextInput = ({ label, id, margin, width }) => {
  return <TextField label={label} id={id} margin={margin} style={{ width: width, backgroundColor: '#fff', borderRadius: '10px' }} />;
};

export default TextInput;