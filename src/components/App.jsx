import { React } from "react";
import GetJoke from "./GetJoke";
import Credit from "./Credit";
import Copyright from "./Copyright";
import CopyClipboard from "./CopyClipboard";
import { useParams } from "react-router-dom";
import { FaTwitter, FaRedo, FaEnvelope } from "react-icons/fa";
import { Button, CssBaseline, Typography, Box } from '@mui/material/';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App(props) {

    const { id } = useParams();
    const joke = GetJoke(id);

    return (
        <>
        <CssBaseline />
        <Box sx={{ width: '80%', maxWidth: 800, mt: 2, display: 'flex', flexDirection: 'column', justifyContenr: 'center', margin: 'auto', flexWrap: 'nowrap' }} >
            <Box sx={{ display: 'flex', margin: '1rem auto .2rem', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }} >
                <Button sx={{ margin: '.3rem' }} variant="outlined" startIcon={<FaRedo />} 
                    href="/">
                    New
                </Button>

                <Button sx={{ margin: '.3rem' }} variant="outlined" startIcon={<FaTwitter />} 
                    href={`https://twitter.com/intent/tweet?text=${joke.setup}%0a%0a${joke.punchline}%0a%0ahttps://www.lultr.com/l/${joke.id}`}>
                    Tweet
                </Button>

                <CopyClipboard id={joke.id} setup={joke.setup} punchline={joke.punchline} />

                <Button sx={{ margin: '.3rem' }} variant="outlined" startIcon={<FaEnvelope />} 
                    href={`mailto:?subject=A%20joke%20from%20Lultr&body=${joke.setup}%0a%0a${joke.punchline}%0a%0ahttps://www.lultr.com/l/${joke.id}`}>
                    Mail
                </Button>

            </Box>
            <Box sx={{  width: '100%',
                        padding: '1rem 2rem 0rem',
                        border: '1px solid', 
                        borderRadius: '1rem',
                        borderColor: '#ccc',
                        display: 'flex', 
                        margin: '1rem auto', 
                        justifyContent: 'center', 
                        flexDirection: 'column', 
                        flexWrap: 'nowrap'
                    }} >
                <Box sx={{ display: 'flex', margin: '.5rem auto 0rem', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }} >
                <Typography paragraph variant="body1" align="center" gutterBottom>
                    {joke.setup}
                </Typography>
                </Box>
                <Box sx={{ display: 'flex', margin: '0rem auto 1.5rem', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }} >
                <Typography paragraph variant="body2" align="center" flexGrow={3} gutterBottom>
                    {joke.punchline}
                </Typography>
                </Box>
                <Credit id={joke.id} credit={joke.credit} tweet={joke.tweet} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '2rem auto 0rem', flexDirection: 'column', flexWrap: 'wrap' }} >
                <Copyright />
            </Box>
        </Box>
        </>
    );
}

export default App;
