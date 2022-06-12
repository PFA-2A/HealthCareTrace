import React from 'react';
import styles from "../home/product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faListCheck, faArrowRightArrowLeft, faSearch
  } from "@fortawesome/free-solid-svg-icons";


function Backlogitemcard(props) { 

  return (
        <div className={styles.projecttab} style={{ cursor: "auto" }}>
            <div className={styles.tableft}> 
                <FontAwesomeIcon title={props.title}
							    icon={faListCheck}
							    style={{ width: "25px", height: "35px", cursor: "auto" ,
                                    color: "#ED6400", padding: "10px", paddingRight: "25px" }}
			    />
                <div> 
                    <h2 className={styles.projecttitle}> {props.name} </h2>
                    <text> {props.description}</text>
                </div>
            </div>
            <div> 
                <FontAwesomeIcon
							    icon={faSearch}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "#00204A", padding: "10px", paddingRight: "25px" }}
			    />
                <FontAwesomeIcon
							    icon={faArrowRightArrowLeft}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "#ED6400", padding: "10px", paddingRight: "25px" }}
			    />
            </div>
        </div> 

  )
}

export default Backlogitemcard