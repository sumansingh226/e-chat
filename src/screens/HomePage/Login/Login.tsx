import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    // Perform login logic
    console.log("Logging in...");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      {error && (
        <Typography variant="body2" color="error" gutterBottom>
          {error}
        </Typography>
      )}
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
