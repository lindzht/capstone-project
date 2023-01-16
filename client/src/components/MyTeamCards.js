import { Button, Card, Image, Icon, Grid } from 'semantic-ui-react'

function MyTeamCards ({team, currentUser}){
    console.log(team)
    return(
        <div className="team-card-container">
            <Card>
                <Card.Content id="card-content-top">
                    {/* <Icon
                    name="arrow circle right"
                    floated='right'
                    size='large'
                    src='/images/avatar/large/steve.jpg'
                    /> */}
                    <Card.Header>{team.name}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Icon name="user circle">{team.recruiters.length} Recruiters</Icon>
                            </Grid.Column>
                            <Grid.Column>
                                <Icon name="check circle">{team.reqs.length} Reqs</Icon>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>
        </div>
    )
}

export default MyTeamCards;