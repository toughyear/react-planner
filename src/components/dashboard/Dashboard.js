import React, { Component } from "react";
import Notifications from "./Notifications";
import Notfications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";

export class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { projects } = this.props;
    return (
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notfications />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};
export default connect(mapStateToProps)(Dashboard);
