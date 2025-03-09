import { defineEventHandler } from "#imports";
export default defineEventHandler(async event => {
	try {
		event.node.res.statusCode = 200;
		return { message: "GET request for all categories" };
	} catch (error) {
		console.error(error);
	}
});
