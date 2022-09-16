import React from 'react'

// the style contains only the margin given as offset
// options contains all alert given options
// message is the alert message
// close is a function that closes the alert
const MyAlertTemplate = ({ style, message }) => (
    <div className="clip-dlg" >
        {message}
    </div>
)

export default MyAlertTemplate;
