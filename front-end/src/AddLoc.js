import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  InputBase,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {});

const AddLoc = (props) => {
  const classes = useStyles();

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = () => {
    console.log(text);
    setText("");
  };

  return (
    <Card className={classes.container}>
      <CardContent className={classes.content}>
        <Typography>Add a Bathroom</Typography>
        <InputBase 
          className={classes.input}
          singleLine
          rows={1}
          placeholder="Bathroom Name"
          fullWidth 
          value={text}
          onChange={handleChange}
        />
        <Grid container direction="row">
          <Grid item>
            <Button onClick={onSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AddLoc;
