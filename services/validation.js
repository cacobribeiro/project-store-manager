const validationProducts = (name, quantity, alredyExists) => {
  console.log(name, quantity, alredyExists);
  switch (true) {
    case !name:
      return { status: false, message: 'Sem Nome' };
    // case !quantity:
    //   return { status: false, message: 'Sem Qunatidade' };
    case alredyExists.length >= 1:
      return { status: false, message: 'Product already exists' };
    case name.length < 5:
      return { status: false, message: '\"name\" length must be at least 5 characters long' };
    case typeof quantity !== 'number':
      return { status: false, message: '\"quantity\" must be a number' };
    case quantity <= 0:
      return { status: false, message: '\"quantity\" must be larger than or equal to 1' };
    default:
      return { status: true };
  }
};

module.exports = validationProducts;
