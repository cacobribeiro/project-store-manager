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

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return false;
  return connection().then((db) => db.collection('products').findOne({ _id: ObjectId(id) }));
};

const updateId = async (id, name, quantity) => {
  connection().then((db) =>
    db.collection('products').updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } }),
  );
  return getById(id);
};

const removeId = async (id) => {
  if (!(await getById(id))) return false;
  if (!ObjectId.isValid(id)) return false;
  connection().then((db) => db.collection('products').deleteOne({ _id: ObjectId(id) }));
  return true;
};

module.exports = {
  addProduct,
  findByName,
  getAll,
  getById,
  updateId,
  removeId,
};
