import { React, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { Button } from '@mui/material/';
import { useAlert } from "react-alert";

function CopyClipboard(props) {

    const id = props.id;
    const alert = useAlert();
    

    let copyText = props.setup;
    copyText += "\n\n" + props.punchline;
    copyText += "\n\nCredit: https://www.lultr.com/l/" + id;

    const [isCopied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
  
    // onClick handler function for the copy button
    const handleCopyClick = () => {
        if (isCopied === false) {
            // Asynchronously call copyTextToClipboard
            copyTextToClipboard(copyText)
                .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                alert.show("📋 Copied to Clipboard");
                setTimeout(() => {
                    setIsCopied(false);
                }, 1600);
                })
                .catch((err) => {
                console.log(err);
                });
        }
    }

    return (
        <>
        <Button sx={{ margin: '.3rem' }} variant="outlined" startIcon={<FaCopy />} onClick={handleCopyClick} >
            Copy
        </Button>
        </>
    );
}

export default CopyClipboard;
