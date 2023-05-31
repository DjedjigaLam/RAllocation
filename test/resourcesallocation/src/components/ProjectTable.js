import ProjectRowItem from "./ProjectRowItem"

function ProjectTable(props) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.projects.map(project => (
                    <ProjectRowItem
                        key={project.rowNumber} 
                        rowNumber={project.rowNumber}
                        rowDescription={project.rowDescription}
                        rowAssigned={project.rowAssigned}
                        deleteProject={props.deleteProject}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default ProjectTable