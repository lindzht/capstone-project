import { useState } from "react";
import { Icon } from 'semantic-ui-react'



function AddTeamCard (){

    const [newTeam, setNewTeam] = useState({
        name: ""
    });
    
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
    
        setNewTeam({
            ...newTeam,
            [key]: value
        })
    }
    const handleTeamSubmit = (e) => {
        e.preventDefault();
        console.log(newTeam);
    };

    return(
        <div id="add-team-container">
            <h3>Add A New Team</h3>
            <form onSubmit={handleTeamSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Team Name..."
                    value={newTeam.name}
                    onChange={handleChange} />
                <Icon name='right arrow' className="arrow circle right" size="large" />
            </form>
        </div>
    )
}

export default AddTeamCard;