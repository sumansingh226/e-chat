import React, { useState, FormEvent } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@mui/material";

const useStyles = makeStyles((theme: any) => ({
  container: {
    // marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    maxWidth: 400,
    marginTop: theme.spacing(1),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    "& .MuiButton-root": {
      margin: theme.spacing(2, 0),
    },
  },
}));

const ResetPassword: React.FC = () => {
  const classes = useStyles();
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your password reset logic here
    console.log("Reset password for email:", email);
    // Reset the form
    setEmail("");
  };

  return (
    <Container component="main" maxWidth="sm" className={classes.container}>
      <Typography variant="h5">Reset Password</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Reset Password
        </Button>
      </form>
    </Container>
  );
};

export default ResetPassword;
