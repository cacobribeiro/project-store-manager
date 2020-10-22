const { ObjectId } = require('mongodb');
const connection = require('./connection');

const addProduct = async (product, quantity) => {
  const results = await connection().then((db) =>
    db.collection('products').insertOne({ name: product, quantity }),
  );
  return results.ops[0];
};
const findByName = async (product) =>
  connection().then((db) => db.collection('products').find({ name: product }).toArray());

const getAll = async () => connection().then((db) => db.collection('products').find().toArray());

const getById = async (id) =>
  connection().then((db) => db.collection('products').findOne({ _id: ObjectId(id) }));

const updateId = async (id, name, quantity) => {
  connection().then((db) =>
    db.collection('products').updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } }),
  );
  return getById(id);
};

module.exports = {
  addProduct,
  findByName,
  getAll,
  getById,
  updateId,
};
