const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const app = express();

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM ecomm.products';


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '613Columbia!@#',
    database: 'ecomm'
});


pool.getConnection(err => {
    if(err) {
        return err;
    }
});




app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /products to see products')
});

app.get('/products/likeproduct', (req, res) => {
    const { productId } = req.query;
    const UPDATE_PRODUCT_QUERY = `UPDATE products SET Likes=Likes+1 WHERE ProductId=${productId}`
    const SELECT_SINGLE_PRODUCT_QUERY = `SELECT * FROM ecomm.products WHERE ProductId=${productId}`

    pool.query(UPDATE_PRODUCT_QUERY, (err, results) => {
        if(err){
            return res.send(err)
        } else{
            return res.json({ data: results })
            console.log('Product Updated!')
        }
    })
});

app.get('/products', (req, res) => {
    pool.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        } else{
            return res.json({
                data: results
            })
        }
    })
})

app.listen(4000, () => {
    console.log('Products server listening on port 4000')
})

