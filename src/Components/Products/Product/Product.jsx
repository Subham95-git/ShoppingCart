import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles';

const Product = ({ product }) => {

    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.img} title={product.name}/>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography /*variant="h5"*/ fontWeight="fontWeightBold" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography  /*variant="h5"*/ fontWeight="fontWeightBold">
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color='textSecondary'>
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className="classes.cardAction">
                    <IconButton aria-lable="Add to Cart">
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
