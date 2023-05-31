function ProjectRowItem(props) {

    return (
        <tr onClick={() => props.deleteProject(props.rowNumber)}>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default ProjectRowItem