import React, { useState } from "react";
import { User } from "../../request/User";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; 
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const userController = new User();

export const Login = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    const data ={
      email,
      password: showPassword,
    }

    const response = await userController.signIn(data);
    console.log(response);

    response.status === 200? alert("Usuario Logueado") : alert("Error al loguear usuario");
  };

  return (
    <>
      <div className="card-login">
        <TextField 
          id="outlined-basic"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          fullWidth
        />
        
        <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => setShowPassword(e.target.value)}
          endAdornment ={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }

          value={showPassword}
        />

        <Button
          variant="contained"
          disableElevation
          onClick={handleLogin}
          fullWidth
        >
          Iniciar sesión
        </Button>
        <Typography align="center">
          ¿No tienes una cuenta? <a href="./Register">Regístrate</a>
        </Typography>
      </div>
    </>
  );
};