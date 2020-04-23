import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {profileThunk} from "../Redux/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        if(!this.props.match.params.userId) {
            this.props.match.params.userId = 6244;
        }
        this.props.profileThunk(this.props.match.params.userId);
    }
    render() {
        return (
            <Profile profile={this.props.profile} {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePageR.profile
    }
};

export default connect(mapStateToProps,
    {profileThunk}
)(withRouter(ProfileContainer));