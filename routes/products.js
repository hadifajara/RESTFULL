var express = require('express');
const { send } = require('express/lib/response');
var router = express.Router();
const {Products} = require('../models');

router.get('/', async (req, res) => {

    const id = req.params.id;

    let product = await Products.findAll();

    if(!product){
        return res.json('Product not found...');
    }

    res.json(product);
});

router.post('/', async (req, res) => {
  
    const product = await Products.create(req.body);

    res.json(product);
});

router.post('/selected', async (req, res) => {
  
    const product = await Products.create({
        name : req.body.name,
        brand : req.body.brand,
        description : req.body.description
    });

    res.json(product);
});

router.patch('/:id', async (req, res) => {
  
    const id = req.params.id;

    let product = await Products.findByPk(id);

    if(!product){
        return res.json('Product not found...');
    }

    product = await product.update(req.body);

    res.json(product);
});

router.get('/:id', async (req, res) => {

    const id = req.params.id;

    let product = await Products.findByPk(id);

    if(!product){
        return res.json('Product not found...');
    }

    res.json(product);
});

router.delete('/delete/:id', async (req, res) => {
  
    const id = req.params.id;

    let product = await Products.findByPk(id);

    if(!product){
        return res.json('Product not found...');
    }

    product = await product.destroy({
        where : {
            id : id
        }
    });

    res.json(product);
});

module.exports = router;
