import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
const  LoginPage = ()=> {
  const [user, setUser] = useState({ identifier: "", password: "" });
  const navigate = useNavigate();

  const handleChange = ({target}) =>{
     const {name ,value} = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name] : value
    }))

  }
  const signIn = async (e) => {
    e.preventDefault();

    try {
      const url = `http://localhost:1337/api/auth/local`;
      if (user.identifier && user.password) {
        const {data} = await axios.post(url, user);
        console.log("dsadsa",data);
        if (data){
          Cookies.set('token', data.jwt, { expires: 7 });

        }
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
        <Box component="form" onSubmit={signIn} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="identifier"
            label="Email Address"
            name="identifier"
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
              <Link to="/register" >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;