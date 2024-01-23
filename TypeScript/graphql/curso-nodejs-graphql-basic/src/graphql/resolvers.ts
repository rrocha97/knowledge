import { ProductResolver } from "./resolvers/products.resolver";
const {product,products, addProduct,updateProduct, deleteProduct, productsByCategory}= new ProductResolver()
import { AuthResolver } from "./resolvers/auth.resolver";
const {login}= new AuthResolver()
import { CategoryResolver } from "./resolvers/category.resolver";
const {addCategory, categories, category}= new CategoryResolver()

const resolvers = {
  Query:{
    hello: (): string=>'hello',
    products,
    product,
    categories,
    category
  },
  Mutation:{
    addProduct,
    updateProduct,
    deleteProduct,
    login,
    addCategory
  },
  Category:{
    products:productsByCategory
  }

}

export default resolvers;
