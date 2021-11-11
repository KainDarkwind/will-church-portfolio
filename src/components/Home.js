import React from "react";
import "../style/master.scss";
import Project from "./Project";

import Bio from "./Bio";
import { projects } from "../data/projects";
import _ from "lodash";
import { safelyParseJson } from "../utils/helpers";

export default class Home extends React.Component {
   constructor(props) {
      super(props);
      const activeProjects = projects.filter((project) => {
         return project.isActive;
      });
      //imagine we are returning filtered results from an API
      const defaultOrder = '["postedAt", "desc"]';
      const params = safelyParseJson(defaultOrder);
      const orderedProjects = _.orderBy(activeProjects, ...params);
      this.state = {
         activeProjects: orderedProjects,
         isAdvanced: false,
         displayedProjects: orderedProjects,
         searchInput: "",
         projectOrder: defaultOrder,
      };
   }

   updateState(e) {
      let value = e.target.value;
      // eslint-disable-next-line
      if (value === "true" || value === "false" || value == Number(value)) {
         value = safelyParseJson(value);
      }

      this.setState({ [e.target.name]: value });

      //const partialState = {};
      //partialState.key = value;
      //this.setState(partialState);
   }

   setIsAdvanced() {
      //this.setState({isAdvanced: !this.state.isAdvanced});

      if (this.state.isAdvanced) {
         this.setState({ isAdvanced: false });
      } else {
         this.setState({ isAdvanced: true });
      }
   }

   // setSearchInput(e) {
   //    console.log(e.target.value);
   //    const searchInput = e.target.value;
   //    this.setState({ searchInput: e.target.value });
   //    this.setState({
   //       projects: this.state.projects.filter((project) => {
   //          return project.title
   //             .toLowerCase()
   //             .includes(this.state.searchInput.toLowerCase());
   //       }),
   //    });
   // }

   setSearchInput(e) {
      const searchInput = e.target.value;
      this.setState((prevState) => {
         return {
            searchInput: searchInput,
            displayedProjects: prevState.activeProjects.filter((project) => {
               const normalizedSearchInput = searchInput.toLowerCase();
               const normalizedTitle = project.title.toLowerCase();
               const normalizedDesc = project.desc.toLowerCase();
               return (
                  normalizedTitle.includes(normalizedSearchInput) ||
                  normalizedDesc.includes(normalizedSearchInput)
               );
            }),
         };
      });
   }

   setProjectOrder(e) {
      const projectOrder = e.target.value;
      const params = safelyParseJson(projectOrder);
      this.setState((prevState) => {
         return {
            projectOrder: projectOrder,
            displayedProjects: _.orderBy(
               prevState.displayedProjects,
               ...params
            ),
         };
      });
   }

   /*
setProjectOrder(e) {
   console.log(e.target.value);
this.setState({ projectOrder: e.target.value });
}
   */

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-xl-8 offset xl-2 col-lg-10 offset-lg-1 col-12">
                  <Bio />
                  <div className="row">
                     <div className="col-sm-8 col-12">
                        <input
                           className="form-control"
                           type="text"
                           placeholder="Search projects"
                           value={this.state.searchInput}
                           onChange={(e) => {
                              this.setSearchInput(e);
                           }}
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
                              name="isAdvanced"
                              id="isAdvanced"
                              className="custom-control-input"
                              checked={this.state.isAdvanced}
                              value={!this.state.isAdvanced}
                              onChange={(e) => {
                                 this.updateState(e);
                              }}
                           />
                           <label
                              className="custom-control-label"
                              htmlFor="isAdvanced"
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
                              value='["postedAt", "desc"]'
                              name="project-order"
                              className="custom-control-input"
                              checked={
                                 this.state.projectOrder ===
                                 '["postedAt", "desc"]'
                              }
                              onChange={(e) => {
                                 this.setProjectOrder(e);
                              }}
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
                              value='["rating", "desc"]'
                              name="project-order"
                              className="custom-control-input"
                              checked={
                                 this.state.projectOrder ===
                                 '["rating", "desc"]'
                              }
                              onChange={(e) => {
                                 this.setProjectOrder(e);
                              }}
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

                  {this.state.displayedProjects.map((project) => {
                     return (
                        <Project
                           project={project}
                           key={project.id}
                           isAdvanced={this.state.isAdvanced}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      );
   }
}
