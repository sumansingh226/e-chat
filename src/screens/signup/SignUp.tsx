import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import "./SignupForm.css";

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform validation
    if (!name || !email || !phone || !password) {
      setError("Please fill in all fields");
      return;
    }
    // Perform signup logic
    console.log("Signing up...");
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Signup
      </Typography>
      {error && (
        <Typography className="error" variant="body2" gutterBottom>
          {error}
        </Typography>
      )}
      <TextField
        label="Name"
        type="text"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
        label="Phone"
        type="tel"
        variant="outlined"
        fullWidth
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
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
          Signup
        </Button>
      </Box>
    </form>
  );
};

export default SignUp;
