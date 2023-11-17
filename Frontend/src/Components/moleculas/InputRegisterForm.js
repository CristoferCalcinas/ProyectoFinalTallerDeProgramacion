import { Box, Button, Typography } from "@mui/material";
import TextInput from "../atomos/TextInput";
import { useForm } from "react-hook-form";

export default function InputRegisterForm() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          borderRadius: "20px",
          // bgcolor: 'red',
          gap: "20px",
        }}
      >
        <Typography variant="h4" style={{ color: "white" }}>
          SING UP
        </Typography>

        <TextInput
          name={"Name"}
          margin="none"
          width={"400px"}
          errors={errors}
          registerparam={{
            ...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
              maxLength: {
                value: 20,
                message: "Name must be less than 20 characters",
              },
            }),
          }}
        />
        <TextInput name={"Email"} margin="normal" width={"400px"}
          errors={errors}
          registerparam={{
            ...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Email address must be valid",
              },
            }),
          }}
        />
        <TextInput name={"Password"} margin="dense" width={"400px"} errors={errors}
          registerparam={{
            ...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            }),
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          style={{
            width: "400px",
            marginTop: "12px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "10px",
            height: "50px",
          }}
        >
          SIGN UP
        </Button>
      </Box>
    </form>
  );
}
