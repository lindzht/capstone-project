import { Icon } from 'semantic-ui-react'

function FormCompany ({newCompany, setNewCompany, createNewRecruiter, newCompanyID, setDisplaySignupForm }){
    
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
    
        setNewCompany({
            ...newCompany,
            [key]: value
        })
    }
    const handleCompanySubmit = (e) => {
        e.preventDefault();
        // setDisplaySignupForm(!displaySignupForm); 
        setNewCompany(newCompany)
        setDisplaySignupForm(true)
        
        // setNewCompany({name: ""})
    };

    return(
        <div id="formcompany-container">
            <form onSubmit={handleCompanySubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Company Name..."
                    value={newCompany.name}
                    onChange={handleChange} />
                <Icon name='right arrow' className="arrow circle right" size="big" onClick={handleCompanySubmit}/>
            </form>
        </div>
    )
}

export default FormCompany;

