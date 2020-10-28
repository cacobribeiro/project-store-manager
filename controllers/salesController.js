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
    const [{ quantity }] = req.body;
    const isValid = await validationSales(quantity);
    if (isValid.status) {
      const result = await salesModels.addProduct(req.body);
      return res.status(200).json({ ...result });
    }
    return res.status(422).json({ err: { code: 'invalid_data', message: isValid.message } });
  }),
);

// Envia uma alteração para o Banco
sales.put(
  '/:id',
  rescue(async (req, res) => {
    const [{ quantity }] = req.body;
    const { id } = req.params;
    const isValid = await validationSales(quantity);
    if (isValid.status) {
      await salesModels.updateId(id, req.body);
      const salesUpdated = await salesModels.getById(id);
      console.log(salesUpdated);

      return res.status(200).json({ ...salesUpdated });
    }
    return res.status(422).json({ err: { code: 'invalid_data', message: isValid.message } });
  }),
);

sales.get(
  '/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id) || !id) {
      return res.status(422).json({ err: { code: 'invalid_data', message: 'Wrong id format' } });
    }
    const products = await salesModels.getById(id);
    if (!products) {
      return res.status(404).json({ err: { code: 'not_found', message: 'Sale not found' } });
    }
    return res.status(200).json({ ...products });
  }),
);

// Busca Todos os Produtos no banco
sales.get(
  '/',
  rescue(async (req, res) => {
    try {
      const allSales = await salesModels.getAll();
      return res.status(200).json({ sales: allSales });
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
    const salesId = await salesModels.getById(id);
    console.log('saleid', salesId);
    if (!salesId) {
      return res
        .status(422)
        .json({ err: { code: 'invalid_data', message: 'Wrong sale ID format' } });
    }

    try {
      await salesModels.removeId(id);
      return res.status(200).json(salesId);
    } catch (error) {
      return res.status(404).json({ err: { code: 'not_found', message: 'Sale not found' } });
    }
  }),
);

module.exports = sales;
