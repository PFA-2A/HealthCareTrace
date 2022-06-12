import React from 'react'
import styles from './Transfer.module.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Select from 'react-dropdown-select';

const TransferController = ( {}) => {
  const options = [
    {
        value: "add11",
        label: "some addresse 1"
    },
    {
        value: "add2",
        label: "some addresse 2"
    }
  ]  
  return (
    <Card 
            className={styles.centeredcard} style={{ backgroundColor: "rgb(245,245,245)", borderRadius: "30px" }}>
                <CardContent>
                    <Typography>
                        <h1 className={styles.title}> Transfer Operation </h1>
                    </Typography>
                    <h3 style={{ textAlign: "center"}}> You are about transferring the item ////naaame to another location </h3>
                    <div className={styles.flexcontainer}>
                        <h4> Pick a Location  </h4>
                        <Select
                            options={ options }
                            onChange={(values) => this.onChange(values)}
                        />
                        <Button 
                            className={styles.btn}
                            style= {{ backgroundColor: "#00204A", color: "#FFF", fontFamily : "cursive", fontSize: "15px", marginTop: "180px" }}
                            variant="contained" >
                            Save
                        </Button>      
                    </div>              
                </CardContent>
        </Card>
  )
}

export default TransferController