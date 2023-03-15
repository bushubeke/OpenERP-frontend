import {  useEffect, useState } from 'react'
import { useStyle } from '../store/theme'
import { useLogInStore } from '../store/store'
import { Link } from 'react-router-dom'
import { client } from '../appfetch/main'


function DropDownMenue({data,title}){
    const [dropToggle,setDropToggle]=useState(false)
    const logout=useLogInStore((state)=> state.resetTokenLogout)
    const authToken=useLogInStore((state)=> state.access_token)
    
    const handleLogOut=()=>{
        client.defaults.headers.common.Authorization = `Bearer token`
        logout()
    }
    return(
        <div className="w-full p-2 bg-slate-100 ">
            <h6  onClick={()=>setDropToggle(!dropToggle)} className="md:min-w-full text-blueGray-500 text-xs shadow-xl uppercase font-bold block px-5 pt-1 pb-2 no-underline">
           {title}
            </h6>	
            <div className={dropToggle ? 'w-full hidden' : 'w-full'} >
            {
                data.map((x,index)=> {
                   
                  return <Link key={x[1]+index}  className='text-xs uppercase px-10 py-2 hover:bg-slate-300 font-bold block text-lightBlue-500 hover:text-lightBlue-600'
                  to={x[0]}> {x[1]} </Link>
                })
            }
             { authToken ? 
                 <Link  className='text-xs uppercase px-10 py-2 hover:bg-slate-300 font-bold block text-lightBlue-500 hover:text-lightBlue-600'
                   to="#" onClick={handleLogOut} >Log Out</Link>
                : ""
             }   
        
                </div>
        </div > 
    )
}
export function SideMenue(){

    const dashDivClass=useStyle((state)=> state.styles.sideBarNav)
    const authToken=useLogInStore((state)=> state.access_token)
    const data={ title:"Main",
                links:[ ['/','Home'],['/spin','Spin'],
                ,['/layout','Form Layout'],
                ['/roles','Roles']]
            }
    const data2={ title:"Log In",
            links:[ ['/login','Log In']]
        }
    return(
        <div className={dashDivClass}>
        {
            authToken  ? 
                   <DropDownMenue data={data.links} title={data.title} />         
                    :
                    <DropDownMenue data={data2.links}  title={data2.title} />
                }

       </div>    )
}