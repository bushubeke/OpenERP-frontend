import { useState } from "react"
import { Navigate } from "react-router-dom"
import { SingleInput, CheckBoxInput, PasswordInput } from "../components/input"
import { NormalButton } from "../components/button"
import { useLogInStore } from "../store/store"
import { FormLayOutPage } from "./viewlayout"
import { RolesPage } from "./roles"
import { AppSpinner } from "./spinner"
import { client } from "../appfetch/main"


export function LogInPage(){
    const login=useLogInStore((state)=>state.setToken)
    const currentToken=useLogInStore((state)=>state.access_token)
    
    const [show,setShow]=useState(false)
    const [values, setValues] = useState({
        grant_type: "authorization_code",
        email : '',
        password: '',
        token: "none"
    });
   
    
    async function handleClick(){
        
    login(values)

    // client.defaults.headers.common.Authorization = `Bearer token`
    client.defaults.headers.Authorization = `Bearer ${currentToken}`
        
    }
    
    
    function handleShow(){
        setShow(!show)
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

   if(currentToken){
    <Navigate to="/" />
   }else {

   
    return(
        <div className="items-start justify-center w-11/12 h-auto p-2 m-2">          
        
            <div className="flex w-full content-center items-center justify-center h-full">
                <div className="w-full sm:w-7/12  lg:w-6/12 xl:w-4/12 sm:px-4 py-5 bg-gray-200 rounded-xl shadow">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-1 shadow-lg rounded-lg  border-0">
                       
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <div className="text-gray-400 text-center mb-3 font-bold">
                                <small>Or sign in with credentials</small>
                            </div>
                            <form>
                                   
                                    <SingleInput 
                                    name="email" 
                                    label="Email"  
                                    inputType="text" 
                                    placeHolder="beimdegefu@gmail.com"
                                    value={values.email} 
                                    handler={handleInputChange.bind(this)} />

                                    <PasswordInput 
                                    name="password" 
                                    label="Password"  
                                    inputType={show ? "text" : "password"}
                                    placeHolder="password" 
                                    value={values.password} 
                                    handler={handleInputChange.bind(this)} />
                                       
                                 
                                    <br/>
                                    <CheckBoxInput
                                    value={show} 
                                    label="Show Passowrd"
                                    name="show"
                                    handler={handleShow.bind(this)}
                                    />
                                    <br/>                                    
                                   
                                    <NormalButton 
                                    label="Sign In" 
                                    handleClick={handleClick.bind(this)} />
                                    
                                 
                            </form>
                        </div>
                    </div>

                    <div className="flex flex-wrap pt-0 relative">
                        <div className="w-1/2 ">
                            <a href="#pablo" className="text-black-200">
                            <small>Forgot password?</small>
                            </a>
                            
                        </div>
                        <div className="w-1/2 text-right">
                            <a className="text-black-200" href="#/auth/register"><small>Create new account</small></a>
                        </div>
                    </div>
                </div>
            </div>
       
        </div>
    )
    
}
}