import React from "react";
import githubLogo from "../icon/github.svg";
import linkedinLogo from "../icon/linkedin.svg";
import youtubeLogo from "../icon/youtube.svg";

export default function Bio() {
   return (
      <div>
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
                     target="_blank"
                     rel="noreferrer"
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
                     href="https://www.linkedin.com/in/wchurch3/"
                     target="_blank"
                     rel="noreferrer"
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
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img src={youtubeLogo} alt="Youtube Logo" width="20px" />
                     Youtube
                  </a>
               </p>
            </div>
         </div>
      </div>
   );
}
