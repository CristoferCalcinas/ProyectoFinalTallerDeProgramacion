import TextField from '@mui/material/TextField';

const TextInput = ({ name, margin, width, registerparam, errors }) => {
  return (
    <TextField
      type={name.toLowerCase()}
      name={name}
      label={name}
      margin={margin}
      style={{ width: width, backgroundColor: '#fff', borderRadius: '10px' }}
      {...registerparam}
      error={!!errors?.name}
      helperText={errors?.[name.toLowerCase()]?.message}
    />
  );
};
export default TextInput;