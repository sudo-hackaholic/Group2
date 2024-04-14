import productService from "../services/productService";

const getProduct = async (req, res) => {
  const query = req.query;
  if (query.id) {
    const productId = parseInt(query.id);
    if (!isNaN(productId)) {
      try {
        const product = await productService.getProductById(productId);
        const sanitizedProduct = sanitizeData(product);
        res.render("shop-product-right", { product: sanitizedProduct });
      } catch (err) {
        console.log(err);
        res.render("404");
      }
    } else {
      res.render("404");
    }
  } else {
    res.render("404");
  }
};

function sanitizeData(data) {
  return data;
}

export default { getProduct };
