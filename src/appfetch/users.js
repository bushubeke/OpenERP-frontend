import { request,client } from "./main";
import { useQuery, useMutation, useQueryClient } from 'react-query'


export const logInUserAdmin =async (data) => {
    return await client({
        method: 'POST',
        url: '/useradmin/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    }).then(function (response) {
          return response  
          
        }).catch((response,error)=> {
            
			return response
        });
       
    } 
    
export const useLogInHook =()=>{
     
	return useMutation(logInUserAdmin, 
        { 
		enabled : false,
		onSuccess : (data)=>{
			// console.log(data?.data)
		},
		onSettled: (data) => {
			// console.log(data?.response?.data)
			// console.log(data?.response?.status)
		}
        }
          )
}