import React from 'react';
import styles from "./product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightArrowLeft, faSearch
  } from "@fortawesome/free-solid-svg-icons";


function LeftNavBar({projectId}) { 

  return (
    <div className={styles.navcontainer}>
        <div className={styles.navheader}>
            <h3> Welcome </h3> 
			<h3> Mr/Ms XXXXX </h3> 
        </div>
        <div className={styles.navwrapper}> 
            <ul>
                <li>
					<FontAwesomeIcon
							icon={faArrowRightArrowLeft}
							style={{ width: "22px"}}
						/>{" "}
					<p style={{display: "inline", margin: "20px"}}>To make a transferring</p>
				</li>
				<li>
					<FontAwesomeIcon
							icon={faSearch}
							style={{ width: "22px", color: "#ED6400"}}
						/>{" "}
					<p style={{display: "inline", margin: "20px"}}>To show the trace of the batch</p>
				</li>
            </ul>
        </div>
    </div>
  )
}

export default LeftNavBar