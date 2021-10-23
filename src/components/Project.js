import React from "react";

function Project(props) {
   console.log(props);
   return (
      <div className="row">
         <div className="col-lg-12">
            <a className="text-reset" href={props.project.youtubeUrl}>
               <h3 className="font-weight-normal">{props.project.title}</h3>
            </a>
         </div>

         <div className="col-md-4 col-12">
            <a href={props.project.youtubeUrl}>
               <img
                  src={props.project.image}
                  className="img-fluid"
                  width="500px"
                  alt="Youtube preview"
               />
            </a>
         </div>
         <div className="col-md-8 col-12">
            <a
               className="text-decoration-none text-reset"
               href={props.project.youtubeUrl}
            >
               <p>
                  Rating: {props.project.rating} {props.project.desc} (
                  {props.project.totalMinutes} min)
               </p>
               <p>{props.project.postedAt}</p>
            </a>
            <div className="d-inline col-12">
               <img src="icon/link.svg" alt="" className="mr-1" width="15px" />
               <a href={props.project.githubUrl}>
                  https://github.com/KainDarkwind/k...
               </a>
            </div>
         </div>
      </div>
   );
}

export default Project;
