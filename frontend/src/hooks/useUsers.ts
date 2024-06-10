import { useQuery } from "@tanstack/react-query";
import { baseApi } from "../api/apiConfig";

export const useUsers = () => {




    async function getUsers() {
        return await baseApi.get('/users');
    }
    
      return useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
      });
}
