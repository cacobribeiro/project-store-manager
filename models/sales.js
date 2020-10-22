const { ObjectId } = require('mongodb');
const connection = require('./connection');

const addProduct = async (productId, quantity) => {
  const results = await connection().then((db) =>
    db.collection('sales').insertOne({
      _id: ObjectId(),
      itensSold: [
        {
          productId,
          quantity,
        },
      ],
    }),
  );
  return results.ops[0];
};

const findById = async (productId) =>
  connection().then((db) => db.collection('sales').find({ _id: productId }).toArray());

const getAll = async () => connection().then((db) => db.collection('sales').find().toArray());

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return false;
  return connection().then((db) => db.collection('sales').findOne({ _id: ObjectId(id) }));
};

const updateId = async (id, productId, quantity) => {
  connection().then((db) =>
    db.collection('sales').updateOne({ _id: ObjectId(id) }, { $set: { productId, quantity } }),
  );
  return getById(id);
};

const removeId = async (id) => {
  if (!(await getById(id))) return false;
  if (!ObjectId.isValid(id)) return false;
  connection().then((db) => db.collection('sales').deleteOne({ _id: ObjectId(id) }));
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
