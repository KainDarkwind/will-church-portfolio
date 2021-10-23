import React from "react";
import "./style/master.scss";
import Project from "./components/Project";
import { projects } from "./data/projects";

console.log(projects);

function App() {
   return (
      <div>
         <h1 className="text-danger">Hello Rachel Zetlow!</h1>
         <>
            {projects.map((project) => {
               return <Project project={project} key={project.id} />; // add key
            })}
         </>
      </div>
   );
}

export default App;
