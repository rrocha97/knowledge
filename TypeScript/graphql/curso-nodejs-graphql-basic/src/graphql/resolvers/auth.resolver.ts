
const AuthService = require('../../services/auth.service');
const service = new AuthService();

export class AuthResolver{

async login(_: any ,{email, password}:any, context: any):Promise<any>{
  const {user} = await context.authenticate('graphql-local',{email,password})
  const token = service.signToken(user)
  return token
}



}
