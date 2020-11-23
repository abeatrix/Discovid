import { BrowserRouter as Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'firebase/auth';
import Landing from "../Pages/Landing";
import Dashboard from "../Pages/Dashboard";
import Signin from "../Pages/Signin";

const auth = firebase.auth();

const Routes = (props) => {

    const [user] = useAuthState(auth);

    return (
        <Switch>
            <Route path='/dashboard' component={Dashboard} exact/>
            <Route path='/' component={Landing} exact />
            <Route path='/signin' component={Signin} exact />
            {/* {user && ( <Route path='/dashboard' component={Dashboard} exact /> )} */}
        </Switch>
    );
};

export default Routes;
