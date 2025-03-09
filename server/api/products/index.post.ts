import { defineEventHandler, readBody } from "#imports";
import ProductService from "~/lib/Services/productService";
import { Prisma } from "@prisma/client";
export default defineEventHandler(async event => {
	try {
		const body = await readBody(event);
		const { name, description, categoryId } = body;
		await ProductService.create(name, categoryId, description);
		event.node.res.statusCode = 201;
		return { message: "Successfully created product"};
	} catch (error) {
		if (error instanceof Prisma.PrismaClientValidationError) {
			console.error(error.name, error.message);
			event.node.res.statusCode = 400;
			return { message: "name and categoryId are required" };
		}
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			const { code, name, message } = error;
			console.error({ code, name, message });
			event.node.res.statusCode = 404;
			return { message: "Cannot create product - failed to find category with provided categoryId" };
		}
		console.error(error);
		event.node.res.statusCode = 500;
		return { message: "Whoopsie" };
	}
});
