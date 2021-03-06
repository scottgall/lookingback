import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import { getCreatedTributes } from "../../actions/dashboardActions";
import Spinner from "../common/Spinner";
// import ProfileActions from './ProfileActions';
import ProfileItem from "../profiles/ProfileItem";
// import profileReducer from '../../reducers/profileReducer';
// import CreatedTributeItem from './CreatedTributeItem';
// import dashboardReducer from '../../reducers/dashboardReducer';
import "./Dashboard.css";

class Dashboard extends Component {
  componentDidMount() {
    // this.props.getCurrentProfile();
    this.props.getCreatedTributes();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    // const { profile, loading } = this.props.profile;
    const {
      createdTributes,
      createdTributesLoading
    } = this.props.createdTributes;

    let dashboardContent;

    if (createdTributes === null || createdTributesLoading) {
      dashboardContent = <Spinner />;
    } else {
      // check if loogged in user has profile data
      if (Object.keys(createdTributes).length > 0) {
        dashboardContent = (
          <div>
            <div>
              <p className="lead text-muted">Welcome {user.name}!</p>
              <Link
                id="create-tribute-btn"
                to="/create-profile"
                className="btn btn-lg btn-info"
              >
                Create New Tribute <i class="fas fa-user-plus" />
              </Link>
            </div>
            <br />
            <br />
            <h6>Your Tribute(s):</h6>

            {createdTributes.map(tribute => (
              <ProfileItem key={tribute._id} profile={tribute} />
              // <h1>{tribute.name}</h1>
            ))}

            {/* <ProfileActions /> */}
            {/* TODO: exp and edu */}
            <div style={{ marginBottom: "60px" }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="delete-btn btn btn-danger"
            >
              Delete my account <i className="fas fa-trash-alt" />{" "}
            </button>
          </div>
        );
      } else {
        // user is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-mute">Welcome {user.name}</p>
            <p>Click the button below to start creating a tribute page.</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              <i className="fas fa-user-plus" /> Create Tribute
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="container-fluid dashboard">
        <div className="container content-container">
          <div className="row">
            <div className="col-md-12">
              <h1 id="my-dashboard" className="display-4 ">
                My Dashboard
              </h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // getCurrentProfile: PropTypes.func.isRequired,
  getCreatedTributes: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  createdTributes: PropTypes.object.isRequired
  // profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // profile: state.profile,
  createdTributes: state.createdTributes,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount, getCreatedTributes }
)(Dashboard);
