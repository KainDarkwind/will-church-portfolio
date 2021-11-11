import React from "react";
import linkIcon from "../icon/link.svg";
import { truncate, displayStars } from "../utils/helpers";
import formatDate from "date-fns/format";
import getCssClasses from "classnames";

export default class Project extends React.Component {
   //Project.render()

   constructor(props) {
      super(props);
      this.state = {
         isHoveredOver: false,
      };
   }

   setIsHoveredOver(isHoveredOver) {
      this.setState({ isHoveredOver: isHoveredOver });
      return;
   }

   // displayAdvancedLink() {
   //    if (this.props.isAdvanced) {
   //       return (
   //          <a href={this.props.project.githubUrl}>
   //             <img src={linkIcon} className="mr-1" width="15px" alt="" />
   //             {truncate(this.props.project.githubUrl, 33)}
   //          </a>
   //       );
   //    }
   // }

   render() {
      const rating = this.props.project.rating;

      return (
         <div className="row">
            <div className="mt-5 col-12">
               <a
                  className={getCssClasses("text-reset text-decoration-none", {
                     "text-underline": this.state.isHoveredOver,
                  })}
                  onMouseEnter={() => {
                     this.setIsHoveredOver(true);
                  }}
                  onMouseLeave={() => {
                     this.setIsHoveredOver(false);
                  }}
                  href={this.props.project.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
               >
                  <h3 className="font-weight-normal">
                     {this.props.project.title}
                  </h3>
               </a>
            </div>
            <div className="col-md-4 col-12">
               <a
                  className="text-reset"
                  href={this.props.project.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => {
                     this.setIsHoveredOver(true);
                  }}
                  onMouseLeave={() => {
                     this.setIsHoveredOver(false);
                  }}
               >
                  <img
                     src={"./" + this.props.project.image}
                     className="img-fluid"
                     alt={this.props.project.title}
                  />
               </a>
            </div>

            <div className="col-12 col-md-8">
               <a
                  className="text-reset text-decoration-none"
                  onMouseEnter={() => {
                     this.setIsHoveredOver(true);
                  }}
                  onMouseLeave={() => {
                     this.setIsHoveredOver(false);
                  }}
                  href={this.props.project.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
               >
                  <p>
                     {displayStars(rating)}
                     {this.props.project.desc} (
                     {this.props.project.totalMinutes} min)
                  </p>
                  <p>
                     {formatDate(this.props.project.postedAt, "MMM. d, yyyy")}
                  </p>
               </a>
               {this.props.isAdvanced && (
                  <a
                     href={this.props.project.githubUrl}
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img src={linkIcon} className="mr-1" width="15px" alt="" />
                     {truncate(this.props.project.githubUrl, 33)}
                  </a>
               )}
            </div>
         </div>
      );
   }
}
