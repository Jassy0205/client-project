import React, { useState } from "react";
import { User } from "../../request/User";
import TextField from '@mui/material/TextField'; 
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

const userController = new User();

export const Register = () => {
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [role, setRole] = useState("");
  const [activeStatus, setActiveStatus] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleRegister = async () => {
    const data ={
      user_name: userName,
      lastname: lastName,
      email,
      password: showPassword,
      role,
      active_status: activeStatus,
    }

    const response = await userController.signUp({data});
    console.log(response);
  };

  return (

    <>
      <div>
        <TextField
          id="standard-basic"
          label="Nombre"
          variant="standard"
          value={userName}
          onChange= {(e) => setUserName(e.target.value)}
        />

        <TextField
          id="standard-basic"
          label="Apellidos"
          variant="standard"
          value={lastName}
          onChange= {(e) => setLastName(e.target.value)}
        />

        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          value={email}
          onChange= {(e) => setEmail(e.target.value)}
        />

        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
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

          label="Password"
        />

        <Button
          variant="contained"
          disableElevation
          onClick={handleRegister}
        >
          Disable elevation
        </Button>

      </div>
    </>
    
  )
};