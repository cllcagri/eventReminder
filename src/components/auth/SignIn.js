import React, {Component} from "react";
import {connect} from "react-redux";
import {signIn} from "../../store/actions/authActions";
import {Redirect} from "react-router-dom";


class SignIn extends Component {
    state ={
        email: '',
        password: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    };

    render() {
        const {auth} = this.props;
        if(auth.uid) return <Redirect to="/" />;

        return (
            <div className="container" style={{paddingTop: '30px'}}>
                <form onSubmit={this.handleSubmit} style={{backgroundColor: '#E0FFFF'}}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="Input Field">
                        <label htmlFor="email" >Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="Input Field">
                        <label htmlFor="password" >Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                        <div className="red-text center">
                            {this.props.authErr ? <p>{this.props.authErr}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authErr: state.auth.authErr,
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
};

export default  connect(mapStateToProps, mapDispatchToProps)(SignIn);
