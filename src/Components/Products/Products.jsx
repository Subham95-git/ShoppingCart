import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import style from './style'

const products = [
    {id:1, name:'Shoes', description:'Running Shoes.', price:'₹1299.00', img:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/05/1144163-987539-The-Top-7-Altra-Running-Shoes-of-2021-1296x728-headerc0dcdf-1296x727.jpg?w=1155&h=1528"},
    {id:2, name:'Laptop', description:'ASUS Laptops.', price:'₹55999.00', img:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/09/new-asus-zenbook-14-1599133062.jpg"},
    {id:3, name:'Chips', description:'Lays Chips(5 packs).', price:'₹130.00', img:"https://www.aapurti.co.in/public/uploads/all/TBQSiwY4HL1DbvZCV75pSpdhWiHHRluf3Hbh48gu.jpg"},
    {id:4, name:'Mobile', description:'Xiomi Mi 11.', price:'₹56999.00', img:"https://www.xda-developers.com/files/2021/01/Xiaomi-Mi-11-XDA-Hands-On-2-1.jpg"},
    {id:5, name:'Kurti', description:'Pure Cutton.', price:'₹569.00', img:"https://static.peachmode.com/media/images/product/57645/base/1596891151_1_TRND-1057_BLUE-PEACHMODE.jpg"},
    {id:5, name:'Sony', description:'Sony HeadPhone.', price:'₹2699.00', img:"https://i.gadgets360cdn.com/products/headphones-and-headsets/large/sony-mdr-xb650bt-wireless-headphone-832X558-1598367551.jpg"}
]
const Products = () => {

    const classes = style();
    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((prod)=>(
                <Grid item key={prod.id} xs={10} sm={6} md={4} lg={2}>
                    <Product product={prod}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
    
}

export default Products;