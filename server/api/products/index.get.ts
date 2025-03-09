import { defineEventHandler } from "#imports";
import ProductService from "~/lib/Services/productService";
export default defineEventHandler(async event => {
  try {
    const products = await ProductService.getAll();
    event.node.res.statusCode = 200;
    return { message: 'Successfully found products', status: 'success', products: products };
  } catch (error) {
    console.error(error);
    event.node.res.statusCode = 500;
    return { message: 'An internal server error has occurred', status: 'error' };
  }
});
