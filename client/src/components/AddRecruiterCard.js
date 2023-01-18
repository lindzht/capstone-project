import { useState } from "react";
import { Icon } from 'semantic-ui-react'



function AddRecruiterCard ({}){

    return(
        <div id="add-recruiter-container">
            <form >
                <input
                    type="text"
                    name="name"
                    placeholder="Team Name..."
                    
                     />
                <Icon name='right arrow' className="arrow circle right" size="large" id="arrow-right" />
            </form>
        </div>
    )
}

export default AddRecruiterCard;