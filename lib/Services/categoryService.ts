import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class CategoryService {
	static async create(name: string) {
		try {
			return await prisma.category.create({ data: { name: name } });
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static async getAll() {
		try {
			return await prisma.category.findMany();
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
