import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import { User } from "../../request/User";
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; 
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { paperClasses } from "@mui/material";

const userController = new User();

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // Hook useNavigate para redirigir al usuario
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    const data ={
      email,
      password,
    }

    const response = await userController.signIn(data);
    console.log(response);

    if (response.status === 200){
      alert("Usuario Logueado");
      navigate("/home");
    }else
    {
      alert("Error al loguear usuario");
    }
  };

  return (
    <>
      <div className="card-register">

        <div className = "email-input">
          <TextField 
            id="outlined-basic"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            fullWidth
          />
        </div>
        
        <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          label="Contraseña"
          className="contraseña"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
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
          ¿No tienes una cuenta? <Link to="/Register">Regístrate</Link>
        </Typography>

      </div>
    </>
  );
};