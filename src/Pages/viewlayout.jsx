import { useState, useEffect } from "react";
import { SingleInput, TextInput } from "../components/input"
import { FileInput } from "../components/fileinput";
import { NormalButton } from "../components/button";
import { useLogInStore } from "../store/store";


export function FormLayOutPage(){
    const currentState=useLogInStore((state)=>state)
    const [values, setValues] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        password: '',
        description: '',
        email: '',
        picture : null,
    });

    useEffect(()=>{
        // console.log(currentState)
    },[])
    const handleClick=() =>{
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
    const handleFileChange = (event) => {
        event.persist();
        const target=event.target
        const value = target.files[0];
        setValues((values) => ({
           ...values,
           [target.name] : value,
        }));
     
    };
    return(
        < div className=" ref-bushu my-10 flex items-start justify-center w-11/12 h-auto">          
        
            <div className="flex w-full content-center items-center justify-center h-full ">
                    <div className="flex flex-col items-center justify-center min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-200 border-0">
                       
                        <div className="w-full flex-auto px-4 lg:px-10 py-10 pt-0">
                        
                            <form className="p-5 w-full">
                                    <div className="flex flex-col md:flex-row space-x-2 w-full" >
                                    <div></div>
                                    <SingleInput 
                                    name="firstName" 
                                    label="First Name"  
                                    inputType="text" 
                                    placeHolder="Jane" 
                                    value={values.firstName} 
                                    handler={handleInputChange.bind(this)}  />
                                    <SingleInput 
                                    name="middleName" 
                                    label="Middle Name"  
                                    inputType="text" 
                                    placeHolder="G" 
                                    value={values.middleName} 
                                    handler={handleInputChange.bind(this)} />
                                    <SingleInput 
                                    name="lastName" 
                                    label="Last Name"
                                    inputType="text" 
                                    placeHolder="Doe" 
                                    value={values.lastName} 
                                    handler={handleInputChange.bind(this)} />
                                    </div>
                                    <div className="flex flex-col md:flex-row space-x-2 w-full" >
                                     <div></div>   
                                    <SingleInput 
                                    name="email" 
                                    label="Email"  
                                    inputType="text" 
                                    placeHolder="beimdegefu@gmail.com"
                                    value={values.email} 
                                    handler={handleInputChange.bind(this)} />

                                    </div>
                                    <div className="flex flex-col md:flex-row space-x-2 w-full" >
                                     <div></div>   
                                    <SingleInput 
                                    name="password" 
                                    label="Password"  
                                    inputType="password" 
                                    placeHolder="password" 
                                    value={values.password} 
                                    handler={handleInputChange.bind(this)} />

                                    </div>
                                    <div className="flex flex-col md:flex-row space-x-2 w-full" > 
                                    <div></div>   
                                    <FileInput 
                                    name="picture" 
                                    label="Your File"  
                                    value={values.picture}
                                    handler={handleFileChange.bind(this)}/>

                                    </div>
                                    <div className="flex flex-col md:flex-row space-x-2 w-full" > 
                                    <div></div>   
                                    <TextInput 
                                    name="description" 
                                    label="Description" 
                                    value={values.description} 
                                    handler={handleInputChange.bind(this)} />

                                    </div>
                                 
                                    <div className="flex flex-col md:flex-row space-x-2 w-full" > 
                                    <div></div>   
                                    <NormalButton 
                                    label="Sign In" 
                                    handleClick={handleClick} />

                                    </div>
                                 
                            </form>
                        </div>
                    </div>
               
            </div>

           
       
       
       
        </div>
    )
    
}