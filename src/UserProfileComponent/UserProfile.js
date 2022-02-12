import React from 'react';
import { useLocation } from 'react-router';


const UserProfile=()=> {
    const data=useLocation();
    console.log(data,'x')
    return ( 
        <>
        logged in
        </>
     );
    ;
}

export default UserProfile;