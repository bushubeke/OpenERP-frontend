import { client } from "./main";
import { useQuery, useMutation, useQueryClient } from 'react-query'



export const getRolesAdmin = async ({ queryKey }) => {
    const page = queryKey[1]
    const pageSize = queryKey[2]
    const access_token = queryKey[3]
    return await client({
        method: 'GET',
        url: `/useradmin/roles?page=${page ? page : 1}&size=${pageSize ? pageSize : 20}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`,
        }
    }).then(function (response) {
            // console.log(response?.data?.items)
          return response
          
        }).catch((response,error)=> {
            console.log(response)
			return response
        });
       
    } 
    
export const useGetRolesHook =(page,pageSize,access_token)=>{
      
	return useQuery(
        ['get-roles',page,pageSize,access_token],getRolesAdmin,
        {
		onSettled: (data) => {
		return data?.response?.data
			// console.log(data?.response?.status)
		}
        }
          )
}