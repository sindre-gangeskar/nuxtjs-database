export default defineEventHandler(event => {
	event.node.res.statusCode = 404;
	return { message: "Hi! This is the root endpoint for all api requests", statusCode: event.node.res.statusCode };
});
