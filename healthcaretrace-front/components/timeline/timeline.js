import * as React from 'react';
import Timeline from '@mui/lab/Timeline';

import TimeLineItem from "./timeLineItem"
import TimeLineSep from "./timeLineSep"
import TimeLineCreationItem from './timeLineCreationItem';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate" style={{marginTop: "100px"}}>
        <TimeLineItem/>
        <TimeLineSep/>
        <TimeLineSep/>
        <TimeLineItem/>
        <TimeLineSep/>
        <TimeLineSep/>
        <TimeLineCreationItem/>
    </Timeline>
  );
}
