import { defineEventHandler } from "#imports";
export default defineEventHandler(async event => {
    console.log(`${event.method} -> ${event.path} - ${event.node.res.statusCode}`);
});
