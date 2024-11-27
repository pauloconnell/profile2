import React, { useEffect, useState, useRef } from "react";
import styles from "./rowCard.module.css";
// props are:
// link1="" header1="" title1="" imgSrc1="" imgAlt1="" footer1="" link2="" header2="" title2="" imgSrc2="" imgAlt2="" footer2=""


export const RowCard = function (props) {

    // const [imageUrl, setImageUrl] = useState('null');
    // const [isDialogOpen, setIsDialogOpen] = useState(false);
    // const webAppsDialog = useRef();

    // const closeDialog = () => { 
    //     console.log("closing dialog");
        
       
    //     setIsDialogOpen(false); 
    //     webAppsDialog.current.close();
    // };

    // const showImg = (e, num) => {
    //   console.log("dig to find img", e.target)
    //   const url = e.target.src;
    //   if(num == 1){
    //     setImageUrl(props.imgSrc1);  
    //   }
    //   if(num == 2){
    //     setImageUrl(props.imgSrc2);
    //   }
    //   setImageUrl(url);
    //   setIsDialogOpen(true);
    //   webAppsDialog.current.showModal();
    // };


    // const handleClick = (event, num) =>{
    //     console.log("fn got ", event.target, num)
    //     if(num == 1 && !props.link1){
    //         event.preventDefault();
    //         setImageUrl(props.imgSrc1);
          
    //     }
    //     if(num == 2 && props.link2 == 'null'){
    //         console.log("2nd item link is: ", props.link2)
    //         event.preventDefault();
    //         setImageUrl(props.imgSrc2);
            
    //     }
    //     setIsDialogOpen(true);
    //     webAppsDialog.current.showModal();
    // }
    


  return (
    
 




      <div className="row mx-1 justify-content-center">
          {/* <dialog  ref={webAppsDialog}  className={styles.dialog} onCancel={closeDialog} >
            <button onClick={closeDialog} className={styles.closeButton}>X</button>
              <img src={imageUrl} alt="shows project"  className="img-fluid"/>

          </dialog>
          onClick={(e)=>showImg(e,1)}
          onClick={(e)=>showImg(e,2)}

          
          */}

          <div className=" col-12 col-sm-5 mx-md-2 mx-lg-3 mx-xl-4    my-5 py-1 px-0 text-center link" >
              <a
                  className={`${styles.noUnderline} link d-block h-100`}
                  href={props.link1 ? props.link1 : "#"}
                  title={props.title1}
                  target="_blank"
                  rel="noreferrer"
                //   onClick={(e) => handleClick(e, 1)}
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
                        <div className={`${styles.noUnderline} card-footer`}>
                            <small className="text-muted">
                                {props.footer1}
                            </small>
                        </div>
                    </div>
                </a>
            </div>

            <div className=" col-12 col-sm-5 text-center my-5 py-1 px-0 link" >
                <a
                    className={`${styles.noUnderline} link d-block h-100`}
                    href={props.link2 ? props.link2 : "#"}
                    target="_blank"
                    rel="noreferrer"
                    title={props.title2}
                    //onClick={(e)=> handleClick(e,2)}
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
                        <div className={`${styles.noUnderline} card-footer`}>
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