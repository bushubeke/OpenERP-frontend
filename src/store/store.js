import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { client } from '../appfetch/main';
export const useStore = create((set) => ({
    bears:{ 
        myBear : 0,  
    },
    increasePopulation: () => set((state) => ({ bears: { myBear : state.bears.myBear+1} })),
    removeAllBears: () => set({ bears: {myBear : 0 } }),
  }))


export const useLogInStore = create(

    persist(
        (set,get) => ({
        openhrm_token :false,
        access_token : null,
        refresh_token : null,  
        setToken: async (data) => {

         await   client({
                method: 'POST',
                url: '/useradmin/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            }).then(function (response) {
                
                const access_token = response?.data?.access_token
                const refresh_token = response?.data?.refresh_token
                
                set((state) => ({ 
                    openhrm_token: true ,
                    access_token : access_token,
                    refresh_token : refresh_token
                }))
                  
                  
                }).catch((response,error)=> {
                    
                    return response
                });
        }, 
        resetTokenLogout: () => set({ 
                openhrm_token: false,
                access_token : null,
                refresh_token : null
            }),
        // resetTokenLogout: () => set({ openhrm_token: localStorage.setItem('open_token','loggedout') }),

        }),
        {
            name: 'login-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
)
