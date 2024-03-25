import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import loginCss from "./loginCss";
interface FormState {
  email: {
    value: string;
    error: string;
  };
  password: {
    value: string;
    error: string;
  };
}

const Login: React.FC = () => {
  const classes = loginCss;
  const initialState: FormState = {
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  };

  const [loginForm, setLoginForm] = useState<FormState>(initialState);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in...");
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prevLoginForm) => ({
      ...prevLoginForm,
      [name]: { value, error: "" },
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>

      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        value={loginForm.email.value}
        onChange={handleFieldChange}
        required
      />
      {loginForm.email.error && (
        <Typography variant="body2" color="error" gutterBottom>
          {loginForm.email.error}
        </Typography>
      )}
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        value={loginForm.password.value}
        onChange={handleFieldChange}
        required
      />
      {loginForm.password.error && (
        <Typography variant="body2" color="error" gutterBottom>
          {loginForm.password.error}
        </Typography>
      )}
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
