import * as React from 'react';
import { Button, CssBaseline, Typography, Box } from '@mui/material/';
import { FaHome, FaEnvelope, FaGithub } from 'react-icons/fa';
import Copyright from "./Copyright";

function About() {

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
                    About
                </Typography>
                <Typography paragraph sx={{ textAlign: 'center' }} variant="body2" gutterBottom>
                    David Finster wrote this to learn more about React.<br />
                    There is no backend; it's a static site that reads json.
                </Typography>

                <Box sx={{ display: 'flex', margin: '1rem auto 1rem', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }} >
                <Button sx={{ margin: '0px 6px 0px 6px' }} variant="outlined" startIcon={<FaEnvelope />} href="mailto:david@fortc.com">
                        Email David
                </Button>
                <Button sx={{ margin: '0px 6px 0px 6px' }} variant="outlined" startIcon={<FaGithub />} href="https://github.com/dfinr/dadjoke">
                        Project Repository
                </Button>
            </Box>

                </Box>
                <Copyright />
            </Box>
        </>
    );
}

export default About;
