import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

function Entry(){
    return(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
       
    )
}

ReactDom.render(<Entry/>,document.getElementById('root'));

