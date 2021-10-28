import React from "react";
import "../style/master.scss";
import Project from "./Project";
import { projects } from "../data/projects";
import githubLogo from "../icon/github.svg";
import linkedinLogo from "../icon/linkedin.svg";
import youtubeLogo from "../icon/youtube.svg";

console.log(projects);

export default function Home() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-xl-8 offset xl-2 col-lg-10 offset-lg-1 col-12">
               <div className="row">
                  <div className="col">
                     <h1 className="display-3 text-center">Will Church</h1>

                     <p className="lead font-weight-normal text-center">
                        Full stack developer
                     </p>

                     <p className="lead font-weight-normal text-center mb-5">
                        <a
                           className="d-inline-block"
                           href="https://github.com/KainDarkwind"
                        >
                           <img
                              src={githubLogo}
                              className="ml-3 mr-1 mt-n1"
                              width="20px"
                              alt="github logo"
                           />
                           Github
                        </a>

                        <a
                           className="mx-5 d-inline-block"
                           href="https://www.linkedin.com/in/will-church-b69b8a3b/"
                        >
                           <img
                              src={linkedinLogo}
                              className="mr-1 mt-n1"
                              width="20px"
                              alt="linkedin Logo"
                           />
                           LinkedIn
                        </a>

                        <a
                           className="mr-1 d-inline-block"
                           href="https://www.youtube.com/channel/UCC8DziHx-gN0_idHQoiFkXg"
                        >
                           <img
                              src={youtubeLogo}
                              alt="Youtube Logo"
                              width="20px"
                           />
                           Youtube
                        </a>
                     </p>
                  </div>
               </div>

               <div className="row">
                  <div className="col-sm-8 col-12">
                     <input
                        className="form-control"
                        type="text"
                        placeholder="Search projects"
                     />
                  </div>
                  <div className="col-sm-4 col-12">
                     <div
                        className="
                           float-right
                           custom-control custom-checkbox custom-control-inline
                        "
                     >
                        <input
                           type="checkbox"
                           name="advancedview"
                           className="custom-control-input"
                           id="advancedview"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="advancedview"
                        >
                           Advanced View
                        </label>
                     </div>
                  </div>

                  <div className="col-12">
                     <div
                        className="
                           mb-5
                           custom-control custom-radio custom-control-inline
                        "
                     >
                        <input
                           type="radio"
                           id="mostrecent"
                           name="search"
                           className="custom-control-input"
                           defaultChecked
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="mostrecent"
                        >
                           Most Recent
                        </label>
                     </div>
                     <div
                        className="
                           custom-control custom-radio custom-control-inline
                        "
                     >
                        <input
                           type="radio"
                           id="mostpopular"
                           name="search"
                           className="custom-control-input"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="mostpopular"
                        >
                           Most Popular
                        </label>
                     </div>
                  </div>
               </div>

               {projects.map((project) => {
                  return <Project project={project} key={project.id} />;
               })}
            </div>
         </div>
      </div>
   );
}
