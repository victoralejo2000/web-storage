import { FetchAllUsers } from "../api/apiUser";

const UserService = {
  getAllUsers: async () => {
    const userData = await FetchAllUsers();
    return userData;
  },
};
export default UserService;

