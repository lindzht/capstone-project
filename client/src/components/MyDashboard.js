import MySubNav from "./MySubNav";
import { Icon } from 'semantic-ui-react';
import { Link} from 'react-router-dom';
import Loading from "./Loading";


function MyDashboard ( {currentUser} ){


if (!currentUser) return <Loading />
    return(
        <div className="dashboard-container">
            <div id="user-display">
                <Link to="/settings">
                    <Icon name="user circle"></Icon><p>{currentUser && currentUser.first_name} <span>{currentUser.admin? `(Admin)` : null}</span></p>
                </Link>
            </div>
            <div className="dashboard-header">
                <h1>{currentUser.first_name} 's Board</h1>
            </div>
            <MySubNav />
        </div> 
    )
}

export default MyDashboard;