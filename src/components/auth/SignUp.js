import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signUp} from "../../store/actions/authActions";

class SignUp extends Component {
    state ={
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    };

    render() {
        const {auth, authErr} = this.props;
        if(auth.uid) return <Redirect to="/" />;

        return (
            <div className="container" style={{paddingTop: '30px'}}>
                <form onSubmit={this.handleSubmit} style={{backgroundColor: '#E0FFFF'}}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="Input Field">
                        <label htmlFor="email" >Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="Input Field">
                        <label htmlFor="password" >Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="Input Field">
                        <label htmlFor="firstName" >FirstName</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="Input Field">
                        <label htmlFor="lastName" >LastName</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                        <div className="red-text center">
                            {authErr ? <p> {authErr} </p> : null}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth,
        authErr : state.auth.authErr
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(signUp(newUser))
    }
};

export default  connect(mapStateToProps,mapDispatchToProps)(SignUp);
