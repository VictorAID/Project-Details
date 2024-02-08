const productService = require('./productsService');

const getProducts = async () => {
  return await productService.getProducts();
};

const getProductById = async (productId) => {
  return await productService.getProductById(productId);
};

const saveProductDetails = async (productDetails) => {
  return await productService.saveProductDetails(productDetails);
};

const deleteProductById = async (productId) => {
  return await productService.deleteProductById(productId);
};

module.exports = {
  getProducts,
  getProductById,
  saveProductDetails,
  deleteProductById
};
