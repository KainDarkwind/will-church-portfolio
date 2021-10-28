import React from "react";
import starIcon from "../icon/star.svg";
import linkIcon from "../icon/link.svg";
import image from "../image/kronos-prototype-walkthrough.webp";
import { truncate } from "../utils/helpers";
import formatDate from "date-fns/format";

export default function Project(props) {
   const rating = props.project.rating;
   function displayStars() {
      let stars = [];
      for (let i = 0; i < rating; i++) {
         stars = stars.concat(
            <img
               src={starIcon}
               className="mr-1 d-inline-block"
               width="18px"
               alt="star icon"
               key={i}
            />
         );
      }
      return stars;
   }
   console.log("The props we passed from the parent component:", props);
   console.log(`../image/${props.project.image}`);
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
                  src={image}
                  // {require("../image/" + props.project.image)}
                  className="img-fluid"
                  width="500px"
                  alt={props.project.title}
               />
            </a>
         </div>

         <div className="col-12 col-md-8">
            <a
               className="text-reset text-decoration-none"
               href={props.project.youtubeUrl}
            >
               <p>
                  {displayStars()}
                  {props.project.desc} ({props.project.totalMinutes} min)
               </p>
               <p>{formatDate(props.project.postedAt, "MMM. d, yyyy")}</p>
            </a>
            <div className="d-inline col-md-4 col-12">
               <a href={props.project.githubUrl}>
                  <img src={linkIcon} className="mr-1" width="15px" alt="" />
                  {truncate(props.project.githubUrl, 33)}
               </a>
            </div>
         </div>
      </>
   );
}
