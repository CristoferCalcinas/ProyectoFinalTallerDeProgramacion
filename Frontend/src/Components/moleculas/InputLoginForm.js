import { Box, Button, Typography } from '@mui/material'
import TextInput from '../atomos/TextInput'


export default function InputLoginForm() {
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
                Sign In
            </Typography>


            <TextInput label={'Email'} margin="none" width={'400px'} />
            <TextInput label={'Password'} margin="normal" width={'400px'} />

            <Button
                variant="contained"
                color="secondary"
                style={{ width: '400px', marginTop: '12px', backgroundColor: '#000', color: '#fff', borderRadius: '10px', height: '50px' }}
            >
                SIGN IN
            </Button>

            <Typography variant="h4" style={{ color: 'white' }}>
                Sign Up
            </Typography>
        </Box>

import { useForm } from 'react-hook-form'

export default function InputLoginForm() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Form data:", data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    Sign In
                </Typography>


                <TextInput name={'Email'} margin="none" width={'400px'}
                    errors={errors}
                    registerparam={
                        {
                            ...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                    message: "Correo no valido - ejemplo: correo@google.com",
                                },
                            }),
                        }
                    }
                />
                <TextInput name={'Password'} margin="normal" width={'400px'}
                    errors={errors}
                    registerparam={
                        {
                            ...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Password must be less than 20 characters",
                                },
                            }),
                        }
                    }
                />

                <Button
                    type='submit'
                    variant="contained"
                    color="secondary"
                    style={{ width: '400px', marginTop: '12px', backgroundColor: '#000', color: '#fff', borderRadius: '10px', height: '50px' }}
                >
                    SIGN IN
                </Button>

                <Typography variant="h4" style={{ color: 'white' }}>
                    Sign Up
                </Typography>
            </Box>
        </form>
    )
}
