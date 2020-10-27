const { ObjectId } = require('mongodb');
const connection = require('./connection');

const addProduct = async (itensSold) => {
  const results = await connection().then((db) => db.collection('sales').insertOne({ itensSold }));
  return results.ops[0];
};

const findById = async (productId) =>
  connection().then((db) => db.collection('sales').find({ _id: productId }).toArray());

const getAll = async () => connection().then((db) => db.collection('sales').find().toArray());

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return false;
  return connection().then((db) => db.collection('sales').findOne({ _id: ObjectId(id) }));
};

const updateId = async (id, itensSold) => {
  connection().then((db) =>
    db.collection('sales').updateOne({ _id: ObjectId(id) }, { $set: { itensSold } }),
  );
  return getById(id);
};

const removeId = async (id) => {
  await connection().then((db) => db.collection('sales').deleteOne({ _id: ObjectId(id) }));
  return true;
};

module.exports = {
  addProduct,
  getAll,
  findById,
  getById,
  updateId,
  removeId,
};
