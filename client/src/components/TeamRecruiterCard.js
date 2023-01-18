import { Icon, Card } from 'semantic-ui-react'


function TeamRecruiterCard({currentTeam, recruiter, deleteRecruiterFromTeam}){


    console.log(currentTeam.recruiterteams)
    const findRelationshipID = currentTeam.recruiterteams.find((recteam) => {
        return(recteam.recruiter.id === recruiter.id)
    })

    // console.log(findRelationshipID)

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
                    <Icon id="recruiter-delete-icon" circular name="x" size="small" onClick={handleDelete} />
                </Card.Content>
            </Card>
        </div>
    )
}

export default TeamRecruiterCard;