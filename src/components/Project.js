import React from "react";
import starIcon from "../icon/star.svg";
import linkIcon from "../icon/link.svg";

export default function Project(props) {
   console.log("The props we passed from the parent component:", props);
   return (
      <>
         <div className="mt-5 col-12">
            <a
               className="text-reset text-decoration-none"
               href={props.project.youtubeUrl}
            >
               <h3 className="font-weight-normal">{props.project.title}</h3>
            </a>
         </div>
         <div className="col-md-4 col-12">
            <a className="text-reset" href={props.project.youtubeUrl}>
               <img
                  src={require("../image/" + props.project.image)}
                  className="img-fluid"
                  width="500px"
                  alt="Video Preview"
               />
            </a>
         </div>

         <div className="col-12 col-md-8">
            <a
               className="text-reset text-decoration-none"
               href={props.project.youtubeUrl}
            >
               <p>
                  <img
                     src={starIcon}
                     className="mr-1 d-inline-block"
                     width="18px"
                     alt="star icon"
                  />
                  <img
                     src={starIcon}
                     className="mr-1 d-inline-block"
                     width="18px"
                     alt="star icon"
                  />
                  <img
                     src={starIcon}
                     className="mr-1 d-inline-block"
                     width="18px"
                     alt="star icon"
                  />
                  <img
                     src={starIcon}
                     className="mr-1 d-inline-block"
                     width="18px"
                     alt="star icon"
                  />
                  <img
                     src={starIcon}
                     className="mr-1 d-inline-block"
                     width="18px"
                     alt="star icon"
                  />
                  {props.project.desc} ({props.project.totalMinutes} min)
               </p>
               <p>{props.project.postedAt}</p>
            </a>
            <div className="d-inline col-md-4 col-12">
               <img src={linkIcon} className="mr-1" width="15px" alt="" />
               <a href={props.project.githubUrl}>{props.project.githubUrl}</a>
            </div>
         </div>
      </>
   );
}
