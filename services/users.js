import Users from '../models/users';
const getUsers=async ()=>{
  return await Users.query();
}
export default {
  getUsers
}
