

function Settings ({currentUser}){
    return(
        <div id="settings-container">
            <div id="settings-card">
                <div id="settings-left-content">
                    <h1>Hello {currentUser.first_name}</h1>
                </div>
                <div id="settings-right-content">
                    
                </div>
            </div>

        </div>
    )
}

export default Settings;