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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const userController = new User();

export const Register = () => {
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [repeatPassword, setRepeatPassword] = React.useState(false);
  const [role, setRole] = useState("");
  const [activeStatus, setActiveStatus] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowRepeatPassword = () => setRepeatPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
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

    const response = await userController.signUp(data);
    console.log(response);

    response.status === 201? alert("Usuario registrado") : alert("Error al registrar usuario");
  };

  return (
    <>
      <div className = "card-register">
        <TextField 
          id="outlined-basic"
          label="Nombre"
          variant="standard"
          value={userName}
          onChange= {(e) => setUserName(e.target.value)}
          fullWidth
        />

        <TextField
          id="outlined-basic"
          label="Apellidos"
          variant="standard"
          value={lastName}
          onChange= {(e) => setLastName(e.target.value)}
          fullWidth
        />

        <div className = "email-input">
          <TextField 
            id="outlined-basic"
            label="Email"
            value={email}
            onChange= {(e) => setEmail(e.target.value)}
            type="email"
            fullWidth
          />
        </div>

        <div className = "row-style">

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

          <InputLabel htmlFor="repeatPassword"></InputLabel>
          <OutlinedInput
            id="repeatPassword"
            type={repeatPassword ? 'text' : 'password'}
            onChange={(e) => setRepeatPassword(e.target.value)}
            endAdornment ={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowRepeatPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {repeatPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }

            value={repeatPassword}
          />
        </div>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Rol</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={role}
            label="Age"
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value={10}>Admin</MenuItem>
            <MenuItem value={20}>Guess</MenuItem>
            <MenuItem value={30}>Client</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          disableElevation
          onClick={handleRegister}
        >
          Registrar usuario 
        </Button>
      </div>
    </>
  );
};