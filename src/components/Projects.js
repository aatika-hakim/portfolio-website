import React, { useEffect, useState } from 'react';

// import projects data
import { projectsData } from '../data';

// import projects nav data
import { projectsNav } from '../data';

// import component
// import Project from './Project';

const Projects = () => {
  const[item, setItem] = useState({name: 'all'});
  const[projects, setProjects]=useState([]);
  const[active, setActive]=useState(0);

  useEffect(()=>{
    // get projects base on item
    if(item.name === 'all'){
      setProjects(projectsData);
    }else{
      const newProjects = projectsData.filter(
        (project) =>{
          return project.category.toLowerCase() === item.name;
        });
        setProjects(newProjects);
    }
  },[item]);

  const handleClick = (e, index) =>{
    setItem({name: e.target.textContent.toLowerCase()});
    setActive(index);
  }

  return (
    // nav
    <div>
    <nav className='mb-12 max-w-xl mx-auto'>
      <ul className='flex flex-col md:flex-row
      justify-evenly items-center text-white'>

      {projectsNav.map((item, index)=>{
        return <li key={index}>{item.name}</li>
        
      })}
      </ul>
    </nav>
    </div>
  )
}

export default Projects;