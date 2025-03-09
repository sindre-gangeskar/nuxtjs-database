import { Prisma } from "@prisma/client";
import { readBody } from "#imports";
import { defineEventHandler } from "#imports";
import CategoryService from "~/lib/Services/categoryService";
export default defineEventHandler(async event => {
	try {
		const body = await readBody(event);
		await CategoryService.create(body.name);

		event.node.res.statusCode = 201;
		return { message: "Successfully created category" };
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === 'P2002') {
				console.error(error.name, error.code);
				event.node.res.statusCode = 409;
				return { message: "Cannot create category - Another category by the same name already exists" };
			}
		}
		
		console.error(error);
		event.node.res.statusCode = 500;
		return { message: "An internal server error has occurred while trying to create a category" };
	}
});
