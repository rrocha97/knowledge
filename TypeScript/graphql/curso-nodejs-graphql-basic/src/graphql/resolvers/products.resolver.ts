
const ProductsService = require('../../services/product.service');
const service = new ProductsService();

type Category = {
  id: string;
  name:string;
  image:string;
}
  type Product ={
    id: string;
    createdAt:string;
    updatedAt?:string;
    deletedAt?:string;
    name:string;
    price:number;
    descriptions:string;
    image:string;
    category:Category
    categoryId:string
  }

export class ProductResolver {

  async products():Promise<Product[]>{
    const products = await service.find() as Product[];
    return products
  }
  async product(_: any, args:any):Promise<Product>{
    const product = await service.findOne(args.id) as Product;
    return product
  }
  async addProduct(_:any, {dto}:any) : Promise<Product>{
     const newProduct = await service.create(dto);
    return newProduct;
  }
  async updateProduct(_:any, {id,dto}:any) : Promise<Product>{
     const newProduct = await service.update(id,dto);
    return newProduct;
  }
  async deleteProduct(_:any, {id}:any) : Promise<string>{
     await service.delete(id);
    return id;
  }
  async productsByCategory(parent:any){
    const id = parent.dataValues.id
    return  await service.findProductsByCategoryId(id);

  }


}
