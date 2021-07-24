import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import home from '../../Resources/home.png'
import style from './Style';

const Navbar = () => {

    const classes = style();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.tittle} color="inherit">
                        <img src={home} alt="Style Revolver" height="25px" className={classes.image}/>
                        Style Revolver
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
