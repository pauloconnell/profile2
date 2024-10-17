import React from "react";

// props are:
// link1="" header1="" title1="" imgSrc1="" imgAlt1="" footer1="" link2="" header2="" title2="" imgSrc2="" imgAlt2="" footer2=""


export const RowCard = function (props) {
  return (
    
 




        <div className="row mx-1 justify-content-center">
            <div className=" col-12 col-sm-5 mx-md-2 mx-lg-3 mx-xl-4    my-5 py-1 px-0 text-center link">
                <a
                    className="link d-block h-100"
                    href={props.link1}
                    title={props.title1}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="card h-100">
                        <div className="card-header title text">
                            <strong>{props.header1}</strong>
                        </div>
                        <div className="card-body d-flex ">
                            <img
                                className="img-fluid justify-content-center object-fit-contain mx-auto"
                                src={props.imgSrc1}
                                alt={props.imgAlt1}
                            />
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">
                                {props.footer1}
                            </small>
                        </div>
                    </div>
                </a>
            </div>

            <div className=" col-12 col-sm-5 text-center my-5 py-1 px-0 link">
                <a
                    className="link d-block h-100"
                    href={props.link2}
                    target="_blank"
                    rel="noreferrer"
                    title={props.title2}
                >
                    <div className="card h-100">
                        <div className="card-header title text">
                            <strong>{props.header2}</strong>
                        </div>
                        <div className="card-body d-flex  ">
                            <img
                                className="img-fluid justify-content-center object-fit-contain mx-auto"
                                src={props.imgSrc2}
                                alt={props.imgAlt2}
                            />
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">
                                {props.footer2}
                            </small>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}