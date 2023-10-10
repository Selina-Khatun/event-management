
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getAuth, onAuthStateChanged,signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import Google from './Google';
import Navbar from '../../components/Navbar/Navbar';
import Login from '../pages/Login/Login';

const auth = getAuth(app);

const ParentComponent = () => {
    const [loggedUser, setLoggedUser] = useState(null);
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setLoggedUser(null);
            })
            .catch(error => {
                console.log(error);
            });
    };
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoggedUser(user);
        }
    });
   


    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route>
                    {loggedUser && <Navbar loggedUser={loggedUser} handleLogout={handleLogout} /> } {/* Pass loggedUser as a prop */}
        
                    <Google handleLogout={handleLogout}></Google>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/services" component={Services} />
                        <Route path="/about" component={About} />
                        <Route path="/register" component={Register} />
                       
                    </Switch>
                </Route>
            </Switch>
        </Router>
    );
};

export default ParentComponent;
