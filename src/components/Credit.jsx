import * as React from 'react';
import { Typography } from '@mui/material/';
import { Markup } from 'interweave';

function Credit(props) {
    const credit = props.credit;
    const id = props.id;

    if (credit) {
        return (
        <>
            <Typography variant="caption" display="block" align="center" gutterBottom>
                <Markup content={credit} /> &bull; <a target="_new" href={`/l/${id}`}>Permalink</a>
            </Typography>
        </>
        ); 
    } else {
        return (
            <>
                <Typography variant="caption" display="block" align="center" gutterBottom>
                    Credit: Unknown &bull; <a target="_new" href={`/l/${id}`}>Permalink</a>
                </Typography>
            </>
        );     
    }
}

export default Credit;
