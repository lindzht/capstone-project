
import { Icon } from 'semantic-ui-react'



function AddTeamCard ({newTeam, setNewTeam, createNewTeam, currentUser}){
    
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
    
        setNewTeam({
            ...newTeam,
            [key]: value,
            company_id: currentUser.company.id
        })
    }
    const handleTeamSubmit = (e) => {
        e.preventDefault();
        createNewTeam(newTeam);
    };

    return(
        <div id="add-team-container">
            <h3>Add Team Board</h3>
            <form onSubmit={handleTeamSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Team Name..."
                    value={newTeam.name}
                    onChange={handleChange} />
                <Icon name='right arrow' className="arrow-circle-right" size="large" id="arrow-right" onClick={handleTeamSubmit}/>
            </form>
        </div>
    )
}

export default AddTeamCard;