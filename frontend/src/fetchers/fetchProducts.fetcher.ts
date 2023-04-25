import IProduct from "@/interfaces/product.interface";
import axios from "axios";

export async function fetchProducts(pageSize: number, pageNumber: number, sort: string, type: boolean): Promise<{ products: IProduct[], totalProduct: number; }> {
    const { data } = await axios({ method: 'GET', baseURL: `http://localhost:6969/api/products?pageSize=${pageSize}&pageNumber=${pageNumber}&sort=${sort}&type=${type}` });
    return { products: data.products, totalProduct: data.totalProduct };
}