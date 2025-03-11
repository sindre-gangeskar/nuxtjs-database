import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class ProductService {
	static async create(name: string, categoryId: number, description?: string) {
		try {
			return await prisma.product.create({ data: { name: name, description: description, category: { connect: { id: categoryId } } } });
		} catch (error) {
			throw error;
		}
	}

	static async getAll() {
		try {
			return await prisma.product.findMany({ include: { category: true } });
		} catch (error) {
			throw error;
		}
	}
}
