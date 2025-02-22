import React from 'react'
import '../css/ProfilePic.css'
import { capitalizeKey } from "../utils/helpers";

function ProfilePic({fname , lname}){
    return <div>
        {capitalizeKey(fname)[0] + capitalizeKey(lname)[0]}
    </div>
}

export default ProfilePic