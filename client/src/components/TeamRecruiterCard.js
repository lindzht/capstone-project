import { Icon, Card } from 'semantic-ui-react'


function TeamRecruiterCard({currentTeam, recruiter, deleteRecruiterFromTeam}){

    const findRelationshipID = currentTeam.recruiterteams.find((recteam) => {
        return(recteam.recruiter.id === recruiter.id)
    })

    function handleDelete (){
        return(
            deleteRecruiterFromTeam(findRelationshipID.id)  
        );
    }

    return(
        <div className="recruiter-card-container">    
            <Card >
                <Card.Content id="recruiter-card-content">
                    <Card.Header ><h5>{recruiter.first_name} {recruiter.last_name}</h5></Card.Header>
                    <Icon id="recruiter-delete-icon" name="x" onClick={handleDelete} />
                </Card.Content>
            </Card>
        </div>
    )
}

export default TeamRecruiterCard;