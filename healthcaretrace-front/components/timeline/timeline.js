import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import styles from '../Addbatch/Addbatch.module.css'
import TimeLineItem from "./timeLineItem"
import TimeLineSep from "./timeLineSep"
import TimeLineCreationItem from './timeLineCreationItem';

export default function CustomizedTimeline() {
  return (
    <Card 
            className={styles.centeredcard} style={{ backgroundColor: "rgb(245,245,245)", borderRadius: "30px" }}>
                <CardContent>
                    <Typography>
                        <h1 className={styles.title}> Here is the traceability of the mediacl product : Productx</h1>
                    </Typography>
                    <Timeline position="alternate" style={{marginTop: "100px"}}>
                        <TimeLineItem/>
                        <TimeLineSep/>
                        <TimeLineSep/>
                        <TimeLineItem/>
                        <TimeLineSep/>
                        <TimeLineSep/>
                        <TimeLineCreationItem/>
                   </Timeline>
                </CardContent>
        </Card>
    
  );
}
