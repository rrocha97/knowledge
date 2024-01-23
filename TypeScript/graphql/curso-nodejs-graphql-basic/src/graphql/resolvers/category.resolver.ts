import { unauthorized } from "@hapi/boom";
import { checkGqlRoles } from "../../utils/auth/checkGqlroles";
const CategoryService = require('../../services/category.service.js');
const service = new CategoryService();

type Category = {
  id: string;
  name:string;
  image:string;
}

export class CategoryResolver{

  async addCategory(_:any,{dto}:any, context:any){
    const {user} = await context.authenticate('jwt',{session: false})
    if (!user) {
      throw unauthorized('jwt is not valid')
    }
    checkGqlRoles(user,["admin"]);
    return await service.create(dto)
  }
  async category(_:any,{id}:any): Promise<Category>{
    return await service.findOne(id)
  }
  async categories(_:any,args:any): Promise<Category>{
    return await service.find()
  }


}
