import React from 'react';
import EventLogo from '../layout/event-logo.png';
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {connect} from "react-redux";

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <li><SignedInLinks profile={profile}/></li> : <li><SignedOutLinks /></li>;
    return(
        <nav className="nav-wrapper" style={{background: '#242424'}}>
            <div className="container">
                <a href="/" className="brand-logo">
                    <img src={EventLogo} alt="Event~Reminder" style={{width: '30px'}}/>
                </a>
                <ul className="right">
                    {links}
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile : state.firebase.profile
    }
};


export default connect(mapStateToProps)(Navbar);