import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            beatae, iusto fugit animi eum impedit corrupti? Asperiores aliquam
            laborum accusantium molestiae! In ratione error illum qui expedita
            doloribus quidem quos.
          </p>
        </div>
        <div className="card-action grey-lighten-4 grey-text">
          <div>Posted by Rajeev</div>
          <div>2nd of sep , 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
