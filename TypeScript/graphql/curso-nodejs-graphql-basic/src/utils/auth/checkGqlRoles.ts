import { unauthorized } from "@hapi/boom"


export const checkGqlRoles = (user: any, role:string[]  )=>{
  if(!role.includes(user.role)){
    throw unauthorized('role is not valid');
  }

}
