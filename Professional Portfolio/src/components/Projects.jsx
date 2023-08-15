import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css?inline";
import FamilyFiesta from '../assets/images/FamilyFiesta.png';
import FamilyFiestav2 from '../assets/images/FamilyFiestav2.png';
import WeatherForecast from '../assets/images/WeatherForecast.png';
import JATE from '../assets/images/JATE.png';
import ProjectCard from './ProjectCard';


export default function ProjectList() {
    
    const projects = [
        {
            name: 'Family Fiesta',
            image: FamilyFiesta,
            link: 'https://rstreep.github.io/family-event-planner/',
            github: 'https://github.com/rstreep/family-event-planner'
        },
        {
            name: 'Family Fiesta v2',
            image: FamilyFiestav2,
            link: 'https://french-fry-event-83fa51ccd940.herokuapp.com/',
            github: 'https://github.com/rstreep/french-fry-event'
        }, 
        {
            name: 'Weather Forecast',
            image: WeatherForecast,
            link: 'https://rstreep.github.io/weather-forecast/',
            github: 'https://github.com/rstreep/weather-forecast'
        },
        {
            name: 'Just Another Text Editor',
            image: JATE,
            link: 'https://pwa-texty-mctexterson-33565576bef8.herokuapp.com/',
            github: 'https://github.com/rstreep/pwa-texty'
        }
    ]
    
    return (
        <section>
            <h2>Projects</h2>
            <div className="row">
                {projects.map((project, i) => (
                    <div key={i} className="col-md-4 mb-4">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </section>
    )
};