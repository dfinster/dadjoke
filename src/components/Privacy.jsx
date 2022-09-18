import * as React from 'react';
import { Button, CssBaseline, Typography, Box } from '@mui/material/';
import { FaHome } from 'react-icons/fa';
import Copyright from "./Copyright";

function Privacy() {

    return (
        <>
            <CssBaseline />
            <Box sx={{ width: '90%', maxWidth: 800, mt: 2, display: 'flex', flexDirection: 'column', margin: 'auto' }} >
            <Box sx={{ display: 'flex', margin: '1rem auto 1rem', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }} >
                <Button sx={{ margin: '0px 6px 0px 6px' }} variant="outlined" startIcon={<FaHome />} 
                    href="/">
                        Home
                </Button>
            </Box>
            <Box sx={{ display: 'flex', margin: '2rem auto 4rem', justifyContent: 'center', flexDirection: 'column', flexWrap: 'wrap' }} >
                <Typography paragraph variant="h1" align="center">
                    Privacy Policy
                </Typography>
                <Typography paragraph sx={{ textAlign: 'center' }} variant="body2" gutterBottom>
                    This is a static site with no backend.<br /> 
                    We don't use cookies.<br />
                    We don't collect, store, or sell anything.<br />
                </Typography>
                </Box>
                <Copyright />
            </Box>
        </>
    );
}

export default Privacy;
