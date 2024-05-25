import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import { useState } from 'react';

export default function Portfolio(props) {

  const { cases } = props;

  const [selected, setSelected] = useState("All");
  const [projects, setprojects] = useState(cases);

  return (
    <div>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selected}
        onSelectFilter={(filter) => {console.log(filter.target.textContent)
          setSelected(filter.target.textContent);

          setprojects(
            filter.target.textContent === "All" ? 
            cases
          :
            cases.filter((item) => item.category === filter.target.textContent)
          );

        ;}
      }/>
      <ProjectList projects = {projects}/>
    </div>
  )
}
