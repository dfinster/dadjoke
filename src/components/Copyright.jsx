import * as React from 'react';
import { Typography } from '@mui/material/';

function Copyright(props) {

        return (
            <>
            <Typography variant="caption" display="block" align="center" gutterBottom>
            <a href="/about">&copy; David Finster</a>
            <br />
            <a href="/about">About</a> &bull; <a href="/privacy">Privacy</a> &bull; <a href="https://github.com/dfinr/dadjoke">GitHub</a>
            </Typography>
            </>
        ); 
}

export default Copyright;
