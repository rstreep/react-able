import React from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css?inline';

export default function ProjectCard({ project }) {
    return (
        <div className="card">
            {/* <img src={project.image} className="card-img-top" alt={project.name} /> */}
            <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">Click below to view:</p>
                <a href={project.link} className="btn btn-primary">
                    View Project
                </a>
                <a href={project.github} className="btn btn-secondary">
                    GitHub Repo
                </a>
            </div>
        </div>
    );
}