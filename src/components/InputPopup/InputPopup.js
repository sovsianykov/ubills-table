import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import {FormGroup} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function InputPopup() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
              <FormGroup>
                  <label htmlFor="current">current</label>
                  <input type="text" placeholder='current value'/>
              </FormGroup>
            </CardContent>
        </Card>
    );
}
