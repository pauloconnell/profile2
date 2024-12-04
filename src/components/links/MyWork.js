import React from 'react';
import { Link } from 'react-router-dom';


/*    <!-- comment causing error on glitch???
<Link className="link width inlineBlock" id="data" to="/DynamicData">
          <span className="center">
            Dynamic
            <br />
            Data
          </span>
        </Link>


/* the main page for the about route of this app */

// const goToTop = () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// };

const MyWork = function () {
  return (
    <div className="textAlign ">
      <div className="gridContainer width70" >
        <Link
          style={{ display: "inline-block" }}
          className="link width p-1 border my-1"
          id="webApps"
          to="/WebApps"
        >
          <span className="center">
            Web <br />
            Applications
          </span>
        </Link>

        <Link
          className="link width inlineBlock p-1 border my-1"
          id="d3"
          to="/DataVisualization2"
        >
          <span className="center">
            Data <br />
            Visualization
          </span>
        </Link>

        <Link className="link width inlineBlock p-1 border my-1" id="fullStack" to="/fullStack">
          <span className="center">
            Full Stack <br />
            Applications
          </span>
        </Link>


      </div>
    </div>
  );
};

export default MyWork;