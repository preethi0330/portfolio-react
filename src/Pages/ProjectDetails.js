import React from "react";
import {useParams} from 'react-router-dom'
import { ProjectList } from "../Helpers/ProjectList";
import '../Styles/ProjectDetails.css'

const ProjectDetails = () => {
    const {id} = useParams();
    const project = ProjectList[id]

    return(
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} alt=""/>
            <p><b>Skills : </b> {project.skills}</p>
        </div>
    )
}

export default ProjectDetails