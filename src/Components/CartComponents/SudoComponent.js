import React from 'react';

function SudoComponent(prop) {
    window.sessionStorage.setItem('sessionPriceObj',JSON.stringify(prop.props))
    return ( <>
    </> );
}

export default SudoComponent;