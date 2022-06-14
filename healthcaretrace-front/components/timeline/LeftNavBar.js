import React from 'react';
import styles from "./product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightArrowLeft, faSearch
  } from "@fortawesome/free-solid-svg-icons";

import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function LeftNavBar({projectId}) { 

  return (
    <div className={styles.navcontainer}>
        <div className={styles.navheader}>
            <h3> Batch-1515151 </h3> 
			<h3> Some description </h3> 
        </div>
        <div className={styles.navwrapper}> 
            <ul>
                <li>
					<CompareArrowsOutlinedIcon/>
					<p style={{display: "inline", margin: "20px"}}>transfers</p>
				</li>
				<li>
					<AddOutlinedIcon/>
					<p style={{display: "inline", margin: "20px"}}>Creation</p>
				</li>
            </ul>
        </div>
    </div>
  )
}

export default LeftNavBar