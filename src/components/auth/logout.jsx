import React from 'react';
import { Link } from 'react-router-dom'; 
import Typography from '@mui/material/Typography';

export const Logout = () => {
    return (
        <div>
            <h1>Logout</h1>

            <Typography align="center">
                <Link to="/">Login</Link>
            </Typography>
        </div>
    )
}
