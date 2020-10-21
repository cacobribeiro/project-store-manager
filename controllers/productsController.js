const { Router } = require('express');
const rescue = require('express-rescue');
const productsModels = require('../models/products');

const validation = require('../services/validation');
// importar o Models....

const product = Router();

product.post(
  '/',
  rescue(async (req, res) => {
    const { name, quantity } = req.body;
    const alreadyExists = await productsModels.findByName(name);
    const isValid = await validation(name, quantity, alreadyExists);
    if (isValid.status) {
      const result = await productsModels.addProduct(name, quantity);
      return res.status(201).json({ ...result });
    }
    res.status(422).json({ err: { code: 'invalid_data', message: isValid.message } });
  }),
);

product.get(
  '/',
  rescue(async (req, res) => {
    try {
      const products = await productsModels.getAll();
      return res.status(200).json({ products });
    } catch (error) {
      res.status(422).json({ err: { code: 'invalid_data', message: error } });
    }
  }),
);

product.get(
  '/:id',
  rescue(async (req, res) => {
    try {
      const { id } = req.params;
      const products = await productsModels.getById(id);
      return res.status(200).json({ products });
    } catch (error) {
      res.status(422).json({ err: { code: 'invalid_data', message: 'Wrong id format' } });
    }
  }),
);

module.exports = product;
