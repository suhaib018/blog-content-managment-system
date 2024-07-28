import { Container,Box,Grid,Typography,TextField,Button} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const navigate = useNavigate();

  const handleChange = ({target}) =>{
     const {name ,value} = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name] : value
    }))

  }
  const signUp = async (e) => {
    e.preventDefault();


      console.log("userRegister",user)
    try {
      const url = `http://localhost:1337/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        console.log(res);
        navigate("/");
      }
    } catch (error) {
      console.log("user")
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={signUp} noValidate sx={{ mt: 1 }}>

        <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            label="User Name"
            type="text"
            id="user-name"
            onChange={handleChange}
          />

         <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
          <Grid item sx={{color:"blue",textDecoration:"underline"}}>
          <Link to="/login">
                  Already have account? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default RegisterPage;
