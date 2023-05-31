import React, {useState} from 'react';
import './App.css';
import ProjectTable from './components/ProjectTable';
import NewProjectForm from './components/NewProjectForm';

function App() {

  const [showAddProjectForm, setShowAddProjectForm] = useState(false);

  const [projects, setProjects] = useState([
    {rowNumber: 1, rowDescription: 'Workload', rowAssigned: 'Djedjiga'},
    {rowNumber: 2, rowDescription: 'Workload', rowAssigned: 'Louis'},
    {rowNumber: 3, rowDescription: 'MES', rowAssigned: 'Djedjiga'},
    {rowNumber: 4, rowDescription: 'Onelims', rowAssigned: 'Djidji'}
  ]
  )

  const addProject = (description, assigned) => {
    let rowNumber = 0;
    if (projects.length > 0) {
      rowNumber = projects[projects.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      const newProject = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setProjects(projects => [...projects, newProject])
  }

  const deleteProject = (deleteProjectRowNumber) => {
    let filtered = projects.filter(function (value) {
      return value.rowNumber !== deleteProjectRowNumber;
    });
    setProjects(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Project
        </div>
        <div className="card-body">
          <ProjectTable projects={projects} deleteProject={deleteProject}/>
          <button onClick={() => setShowAddProjectForm(!showAddProjectForm)} className='btn btn-primary'>
            {showAddProjectForm ? 'Close New Project' : 'New Project'}
          </button>
        {showAddProjectForm && 
          <NewProjectForm addProject={addProject}/>
        }
        </div>
      </div>
    </div>
  );
}

export default App;
