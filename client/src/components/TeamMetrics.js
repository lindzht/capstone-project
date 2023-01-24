
import {useParams } from 'react-router-dom';
import Loading from './Loading';


function TeamMetrics ( {currentUser, currentTeam, setSelectTeamID} ){
    // let params = useParams();
    // setSelectTeamID(params.teamId)
    
    console.log(currentTeam)

    const renderMetricsDisplay = ()=> {
      return(
        currentTeam.recruiters.map((recruiter) => {
          return(
            <div id="recruiter-metrics-row" key={recruiter.id}>
              <h3>{recruiter.first_name} {recruiter.last_name}</h3>
              <h4>{recruiter.open_reqs}</h4>
              <h4>{recruiter.hired_reqs}</h4>
              <h4>{recruiter.avg_time_to_fill}</h4>
              <h4>{recruiter.avg_time_to_hire}</h4>
            </div>
          )
        })
      )
    }

    return(
        <div className='req-container'>
          <div id="team-metrics-headers">
            <h3>Recruiter</h3>
            <h3>Open Reqs</h3>
            <h3>Hired Reqs</h3>
            <h3>Avg Time To Fill</h3>
            <h3>Avg Time To Hire</h3>
          </div>
          <div id="team-metrics-data">
            <br />
            {currentTeam && currentTeam.recruiters ? 
            renderMetricsDisplay()
            : <Loading />}
          </div>
        </div> 
    )
}

export default TeamMetrics;