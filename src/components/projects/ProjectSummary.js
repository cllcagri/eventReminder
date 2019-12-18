import React from "react";
import moment from "moment";


const ProjectSummary = ({project}) => {
    console.log("project sum");
    console.log(project);
    const divStyle = {
        marginTop : '30px'
    };
    return(
        <div className="card z-depth-0 project-summary" style={divStyle}>
            <div className="card-content grey-text text-darken-3" key={project.id}>
                <span className=" card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    );
};

export default  ProjectSummary;