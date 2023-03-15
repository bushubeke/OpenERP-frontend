import { useEffect, useState, Fragment} from "react"
import { SingleInput, CheckBoxInput } from "../components/input"
import { NormalButton } from "../components/button"
import { useGetRolesHook} from "../appfetch/roles"
import { useStyle } from "../store/theme";
import { AppSpinner } from "./spinner";
import { useLogInStore } from "../store/store";
import { EditIcon, TrashIcon } from "../components/icons";


export function AddRolesForm(){
   
    const myContainer=useStyle((state)=>state.styles.componentWorkingDiv)
        
    const [values, setValues] = useState({
        name: '',
        description : '',
    });

   
    const handleClick =()=>{
      console.log(values)
        
    }
    
    const handleInputChange = (event) => {
        event.persist();
        const target=event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setValues((values) => ({
           ...values,
           [target.name] : value,
        }));
       
    };

   
    return(
        <Fragment>
           <div className="flex w-full content-center items-center justify-center h-full ">
                <div className="flex flex-col items-center justify-center min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-200 border-0">
                    
                    <div className="w-full flex-auto px-4 lg:px-10 py-10 pt-0">
                    
                        <form className="p-5 w-full">
                                <div className="flex flex-col md:flex-row space-x-2 w-full" >
                                <div></div>
                                <SingleInput 
                                name="name" 
                                label="Role Name"  
                                inputType="text" 
                                placeHolder="Admin" 
                                value={values.name} 
                                handler={handleInputChange.bind(this)}  />
                                <SingleInput 
                                name="description" 
                                label="Description"  
                                inputType="text" 
                                placeHolder="HR Administrator" 
                                value={values.description} 
                                handler={handleInputChange.bind(this)} />
                                </div>                                 
                                <div className="flex flex-col md:flex-row space-x-2 w-full" > 
                                <div></div> 
                                <div className="w-full flex flex-col items-end">
                                    <div className="w-full sm:w-3/12">
                                    <NormalButton 
                                    label="Add Role" 
                                    handleClick={handleClick} />     
                                    </div>
                                </div>  

                                </div>
                                
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
    
}

export function ViewRolesSection(){
    const [page, setPage]=useState(1)
    const [pageSize,setPageSize]=useState(10)
    const access_token = useLogInStore((state)=>state.access_token)
   
 
    const {data, isLoading, isSuccess} =useGetRolesHook(page,pageSize,access_token)
     if (isLoading){
        return <AppSpinner />
     }  
     

     if (isSuccess){
        
         return(
        <Fragment>
        <div className="w-full flex items-stretch  justify-start h-full ">
            <div className="flex flex-col  items-center justify-start min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-200 border-0">

                <div className="pc-block hidden sm:block w-full flex-auto space-y-1  px-4 lg:px-10 py-10 pt-0">
                    <div className="w-full  text-white text-lg flex flex-row space-x-1 items-stretch justify-center h-auto">
                        <div className="flex bg-slate-700 w-1/12 rounded-tl-lg justify-center items-center">
                            <p>ID</p>
                        </div>
                        <div className="flex justify-center items-center bg-slate-700 w-4/12">
                            <p>Role Name</p>
                        </div>
                        <div className="flex justify-center items-center bg-slate-700 w-5/12">
                           <p> Descriptions</p>
                        </div>
                        <div className="flex justify-center items-center w-1/12 bg-slate-700">
                        </div>
                        <div className="flex justify-center items-center w-1/12 rounded-tr-lg bg-slate-700">
                        </div>
                    </div>
                    
                {
                data?.data.items.map((x,index) =>{
                    return(
                    <div key={index} className="w-full  text-lg flex flex-row space-x-1 items-stretch justify-center h-auto">
                        <div className="flex bg-gray-50 w-1/12 justify-center items-center">
                            <p>{x.id}</p>
                        </div>
                        <div className="flex justify-center items-center bg-gray-50 w-4/12">
                            <p>{x.name}</p>
                        </div>
                        <div className="flex p-5 indent-3 justify-center items-center bg-gray-50 w-5/12">
                        <p> {x.description}</p>
                        </div>
                        <div className="flex justify-center items-center w-1/12 bg-gray-50">
                            <button>
                                <EditIcon />
                            </button>
                        </div>
                        <div className="flex justify-center items-center w-1/12 bg-gray-50">
                            <button>
                                <TrashIcon />

                            </button>
                        </div>
                    </div>
                    )
                })
            }
                </div>

                <div className="mobile-block hidden sm:block w-full flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="w-full h-auto">
                        
                    </div>
                {
                    data?.data.items.map((x,index) =>{
                    return <p key={index}> {x.id}-{x.name}-{x.description} </p>
                
                })
                }
                </div>
            
            </div>        
        </div>

       
        </Fragment>
         )      
     }     
}

export function RolesPage(){
   
    const myContainer=useStyle((state)=>state.styles.componentWorkingDiv)
    
    
    const [values, setValues] = useState({
        name: '',
        description : '',
    });

   
    const handleClick =()=>{
      console.log(values)
        
    }
    
    const handleInputChange = (event) => {
        event.persist();
        const target=event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setValues((values) => ({
           ...values,
           [target.name] : value,
        }));
       
    };

   
    return(

        <div className={myContainer}>          
            <div className="hidden sm:block bg-zinc-100 h-auto  shadow-lg w-full">
                <AddRolesForm />
            </div>
            <div className="h-full bg-zinc-100 shadow-lg w-full">
   
                    <ViewRolesSection />
            </div>
            
            
        </div>
    )
    
}
 