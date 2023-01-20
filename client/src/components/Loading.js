import { Icon } from 'semantic-ui-react'

function Loading (){
    return(
        <div id="loading">
            <h1>Loading...</h1>
            <Icon loading name="redo alternate" />
        </div>
    )
}

export default Loading;