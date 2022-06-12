import React from 'react'
import styles from "/components/projects/projects.module.css";
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


  const [backlogList, setBacklogList] = useState([])

  const getBacklogList = async () => {
    const instance = axios.create({
        baseURL: "https://extensively-scrum.herokuapp.com",
        //baseURL: "http://10.1.9.111:8001",
        withCredentials: true,
        headers: {  
          'Access-Control-Allow-Origin':"*",
          'Content-Type': 'application/json',
          'Authorization': getCookie("token")
        }
    });

    let result = await instance.get('/api/backlog/list/' + projectId).then(result => {
        setBacklogList(result.data)
    });
    return result;
  }

  useEffect(() => {
    // Update the document title using the browser API
    getBacklogList();
  });
  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentheader}>
        <h1 className={styles.contenttitle}> Check all your epics, user stories and bugs in here !</h1>
        <a href={'/addpbitem/'+projectId} className={styles.btn}>
            <FontAwesomeIcon title='Add'
							    icon={faAdd}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "white", padding: "10px", paddingRight: "25px" }}
			      />
            <text> Add Backlog Item  </text>
        </a>
      </div>  
    
    
      <div className={styles.contentwrapper}> 
        <ProductCard name = {"Batch-1"} description = {"tomatoes"} tag = {b.tag} />
        <ProductCard name = {"Batch-2"} description = {"something else"} tag = {b.tag} />
      </div>
    
    </div>
  )
}

export default ProductBacklog