
import {Button } from 'semantic-ui-react'
import Select from 'react-select';



function AddRecruiterCard ({companies, currentTeam}){
    
    const currentCompanyRecruiters = companies.filter((company) => {
       return( company.id === currentTeam.company.id ? 
            company.recruiters : null )
        })
    

    const companyRecruiterSearchInput = currentCompanyRecruiters[0].recruiters.map((recruiter) => {
        return( {label: `${recruiter.first_name} ${recruiter.last_name} `, value: recruiter.id})
    }) 

    const recruiterSelected = (e) => {
        console.log(e.value)
    }

    return(
        <div id="add-recruiter-container">
            <Select 
                    id="recruiter-search"
                    options={companyRecruiterSearchInput} 
                    onChange={recruiterSelected}/>
            <Button id="recruiter-add-button" >Add</Button>
        </div>
    )
}

export default AddRecruiterCard;