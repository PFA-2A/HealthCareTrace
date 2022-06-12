import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './Addbatch.module.css'
import Widget from './Widget';

const AddbatchContainer = () => {
    const [formValues, setFormValues] = useState({name: "",description: ""})  ////add componentss
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
    };
    return (
        <Card 
            className={styles.centeredcard} style={{ backgroundColor: "rgb(245,245,245)", borderRadius: "30px" }}>
                <CardContent>
                    <Typography>
                        <h1 className={styles.title}> Add a new Batch </h1>
                    </Typography>
                    <div className={styles.flexcontainer}>
                        <h3> Enter the batch name </h3>
                        <TextField className={styles.textfield} 
                            style = {{ marginBottom: "2rem" }}
                            id="name-input"
                            name="name"
                            label="Name"
                            type="text"
                            required
                            value={formValues.name}
                            onChange={handleInputChange}
                        />
                        <h3> Enter a description </h3>
                        <TextField className={styles.textfield}
                            style = {{ marginBottom: "2rem", borderBlockColor: "#fff" }}
                            id="description-input"
                            name="description"
                            label="Description"
                            type="text"
                            required
                            multiline
                            minRows={3}
                            value={formValues.description}
                            onChange={handleInputChange}
                        />
                        <h3> Select the Components of your batch </h3>
                        <Widget className={styles.widget} style = {{ marginBottom: "2rem"}} />
                        <Button 
                            className={styles.btn}
                            style= {{ backgroundColor: "#00204A", color: "#FFF", fontFamily : "cursive", fontSize: "15px", marginTop: "20px" }}
                            variant="contained" >
                            Add
                        </Button>      
                    </div>              
                </CardContent>
        </Card>
  )
}

export default AddbatchContainer