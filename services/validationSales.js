const validationSales = (quantity, alreadyExists = []) => {
  switch (true) {
    case quantity <= 0:
      return { status: false, message: 'Wrong product ID or invalid quantity' };
    case alreadyExists.length >= 1:
      return { status: false, message: 'Wrong product ID or invalid quantity' };
    case typeof quantity !== 'number':
      return { status: false, message: 'Wrong product ID or invalid quantity' };
    default:
      return { status: true };
  }
};

module.exports = validationSales;
