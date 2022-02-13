import React, { useContext, useState } from 'react';
import {ContextArr} from '../HelperFun/Context';


const UserProfile=()=> {
    const contextarr=useContext(ContextArr)
    const [profile,setProfile]=useState(contextarr[0].userData.userAccData);


    return ( 
        <>
        <h1>Hi {profile.name} !!!</h1>
        </>
     );
    ;
}

export default UserProfile;