const { Router } = require('express');
const rescue = require('express-rescue');
const { ObjectId } = require('mongodb');
const productsModels = require('../models/products');

const validation = require('../services/validation');
// importar o Models....

const product = Router();

// Envia um novo produto via POST
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

// Envia uma alteração para o Banco
product.put(
  '/:id',
  rescue(async (req, res) => {
    const { name, quantity } = req.body;
    const { id } = req.params;
    const isValid = await validation(name, quantity);
    if (isValid.status) {
      const result = await productsModels.updateId(id, name, quantity);
      return res.status(200).json({ ...result });
    }
    res.status(422).json({ err: { code: 'invalid_data', message: isValid.message } });
  }),
);

// Buscar Por ID expecifico REQ2
product.get(
  '/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id) || id === null) {
      res.status(422).json({ err: { code: 'invalid_data', message: 'Wrong id format' } });
    }
    const products = await productsModels.getById(id);
    return res.status(200).json({ ...products });
  }),
);

// Busca Todos os Produtos no banco
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

module.exports = product;
