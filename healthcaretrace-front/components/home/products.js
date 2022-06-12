import React from 'react'
import styles from "./product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faListCheck, faBolt, faBug, faAdd
  } from "@fortawesome/free-solid-svg-icons";
import { color } from '@mui/system';
import ProductCard from '../cards/productCard';
import { getCookie } from 'cookies-next';
import { list } from 'postcss';
import axios from 'axios';
import { useState , useEffect} from 'react';



function ProductBacklog({projectId}) {

  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentheader}>
        <h1 className={styles.contenttitle}> List of currently stored batches</h1>
        <a href={'/addpbitem/'+projectId} className={styles.btn}>
            <FontAwesomeIcon title='Add'
							    icon={faAdd}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "white", padding: "10px", paddingRight: "25px" }}
			      />
            <text> Add a new batch  </text>
        </a>
      </div>  
    
    
      <div className={styles.contentwrapper}> 
        <ProductCard name = {"Batch-1"} description = {"tomatoes"} tag = {"jdlkjfljiejfijeij"} />
        <ProductCard name = {"Batch-2"} description = {"something else"} tag = {"klfjdlkjflkdjflkjiejfih"} />
      </div>
    
    </div>
  )
}

export default ProductBacklog