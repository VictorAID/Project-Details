const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'products.json');

const getProducts = async () => {
  try {
    const fileContent = await fs.readFile(filePath);
    return JSON.parse(fileContent);
  } catch (error) {
    throw "Error reading product details";
  }
};

const getProductById = async (id) => {
  try {
    const fileContent = await fs.readFile(filePath);
    const productData = JSON.parse(fileContent);
    const fetchedProduct = productData.find((product) => product.id === parseInt(id));

    if (!fetchedProduct) {
      throw 'No product found with the requested id';
    }

    return fetchedProduct;
  } catch (error) {
    throw "Error reading product details";
  }
};

const saveProductDetails = async (productDetails) => {
  try {
    let fileContent = await fs.readFile(filePath);
    let productData = JSON.parse(fileContent);

    const existingProduct = productData.find((product) => product.id === parseInt(productDetails.id));

    if (existingProduct) {
      throw "Product already exists";
    }

    productData.push(productDetails);

    await fs.writeFile(filePath, JSON.stringify(productData));
    return productDetails; // Returning the saved product details
  } catch (error) {
    throw "Error saving product details";
  }
};

const deleteProductById = async (productId) => {
  try {
    let fileContent = await fs.readFile(filePath);
    let productData = JSON.parse(fileContent);

    const index = productData.findIndex((product) => product.id === parseInt(productId));

    if (index === -1) {
      throw 'Product does not exist';
    }

    const deletedProduct = productData.splice(index, 1);

    await fs.writeFile(filePath, JSON.stringify(productData));
    return deletedProduct[0]; // Returning the deleted product details
  } catch (error) {
    throw "Error deleting product";
  }
};

module.exports = {
  getProducts,
  getProductById,
  saveProductDetails,
  deleteProductById
};
