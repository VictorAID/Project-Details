const productDAO = require('./productDAO');

const getProducts = async () => {
  return await productDAO.getProducts();
};

const getProductById = async (productId) => {
  return await productDAO.getProductById(productId);
};

const saveProductDetails = async (productDetails) => {
  return await productDAO.saveProductDetails(productDetails);
};

const deleteProductById = async (productId) => {
  return await productDAO.deleteProductById(productId);
};

module.exports = {
  getProducts,
  getProductById,
  saveProductDetails,
  deleteProductById
};
