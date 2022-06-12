
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function () {
    return (<TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          10/02/2020 9:10
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary'>
            <AddOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Creation
          </Typography>
          <Typography>Components :</Typography>
          <div style={{marginTop: "5px", marginLeft: "20px", color: "blue"}}>
              <ui>
                  <li>
                        <a href='#'>component 1</a><br/>
                        <a href='#'>component 2</a><br/>
                        <a href='#'>component 3</a><br/>
                  </li>
              </ui>
          </div>
        </TimelineContent>
      </TimelineItem>)
}