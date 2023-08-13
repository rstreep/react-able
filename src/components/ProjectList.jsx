import { Link } from 'react-router-dom';

export default function ProjectList() {
    const projects = [
        {
            name: 'Project 1',
            link: 'https://www.project1.com'
        },
        {
            name: 'Project 2',
            link: 'https://www.project2.com'
        }
    ]
    
    return (
        <section>
            <h2>Projects</h2>
            <ul>
                {
                    projects.map((project, i) => (
                        <li key={i}>
                            <a href="project.link">
                                {project.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}