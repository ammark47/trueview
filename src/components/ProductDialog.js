import React, { useState, useEffect, useRef } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl, InputLabel, FormHelperText, Input, FormLabel, FormGroup, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

import { insertNewProduct } from '../models/product';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
            },
        input: {
            display: 'none',
        },
    }),
);



export const ProductDialog = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({});

    const formRendered = useRef(false);

    useEffect(() => {
        if (!formRendered.current) {
            setValues({"store": "amazon"});
        }
        formRendered.current = true;
    }, []);
    
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        if (e) e.preventDefault()
        insertNewProduct(values)
    }

    const handleChange = (e) => {
        const { target } = e;
        const { id, value } = target;
        e.persist();
        setValues({ ...values, [id]: value, });
    }

    const handleFileUpload = (e) => {
        e.preventDefault()
        const { files } = e.target;
        setValues({ ...values, "file": files[0]})
    }
    
    return (
        <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add New Product</DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="product_name">Product Name</InputLabel>
                            <Input id="product_name" aria-describedby="Enter Product Name" onChange={handleChange}/>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Store Name</FormLabel>
                            <RadioGroup aria-label="store" name="store" value="amazon" onChange={handleChange}>
                                <FormControlLabel value="amazon" control={<Radio />} label="Amazon" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl>
                            <InputLabel htmlFor="p_id">Product ID</InputLabel>
                            <Input id="p_id" aria-describedby="p_id" onChange={handleChange}/>
                            <FormHelperText id="p_id">Enter the product id</FormHelperText>
                        </FormControl>
                    </div>

                    <div className={classes.root}> 
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="product_image"
                            multiple
                            type="file"
                            onChange={handleFileUpload}
                        />
                        <label htmlFor="product_image">
                            <Button variant="contained" color="primary" component="span" >
                            Upload
                            </Button>
                        </label>
                    </div>
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" onClick={handleClose} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
        </div>
    );
}