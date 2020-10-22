const { Router } = require('express');
const rescue = require('express-rescue');
const { ObjectId } = require('mongodb');
const salesModels = require('../models/sales');

const validationSales = require('../services/validationSales');
// importar o Models....

const sales = Router();

// Envia um novo produto via POST
sales.post(
  '/',
  rescue(async (req, res) => {
    const [{ productId, quantity }] = req.body;
    const alreadyExists = await salesModels.findById(productId);
    console.log(alreadyExists);
    const isValid = await validationSales(productId, quantity, alreadyExists);
    if (isValid.status) {
      const result = await salesModels.addProduct(productId, quantity);
      console.log(result);
      return res.status(200).json({ ...result });
    }
    return res.status(422).json({ err: { code: 'invalid_data', message: isValid.message } });
  }),
);

// Envia uma alteração para o Banco
sales.put(
  '/:id',
  rescue(async (req, res) => {
    const { productId, quantity } = req.body;
    const { id } = req.params;
    const isValid = await validationSales(productId, quantity);
    if (isValid.status) {
      const result = await salesModels.updateId(id, productId, quantity);
      return res.status(200).json({ ...result });
    }
    return res.status(422).json({ err: { code: 'invalid_data', message: isValid.message } });
  }),
);

// Buscar Por ID expecifico REQ2
sales.get(
  '/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id) || id === null) {
      return res.status(422).json({ err: { code: 'invalid_data', message: 'Wrong id format' } });
    }
    const products = await salesModels.getById(id);
    return res.status(200).json({ ...products });
  }),
);

// Busca Todos os Produtos no banco
sales.get(
  '/',
  rescue(async (req, res) => {
    try {
      const allSales = await salesModels.getAll();
      return res.status(200).json({ allSales });
    } catch (error) {
      return res.status(422).json({ err: { code: 'invalid_data', message: error } });
    }
  }),
);

// Deletar um produto
sales.delete(
  '/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const product = await salesModels.getById(id);
    const results = await salesModels.removeId(id);
    if (results) {
      return res.status(200).json({ ...product });
    }
    return res.status(422).json({ err: { code: 'invalid_data', message: 'Wrong sale ID format' } });
  }),
);

module.exports = sales;
