export default function ProjectList() {
    
    const projects = [
        {
            name: 'Proj 1',
            link: 'https://www.project1.com'
        },
        {
            name: 'Proj 2',
            link: 'https://www.project2.com'
        },
        {
            name: 'Random HW',
            link: 'https://www.randomhw.com'
        }
    ]
    
    return (
        <section>
            <h2>Projects</h2>
            <ul>
                {
                    projects.map((project, i) => (
                        <li key = {i}>
                            <a href={project.link}>
                                {project.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
};