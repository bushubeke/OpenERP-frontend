
export function SingleInput({ label, inputType, placeHolder,name, value, handler}){

    return(

        <div className="relative w-full mb-3">
            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">{label}</label>
            <input name={name} type={inputType} onChange={handler} aria-label={label} className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder={placeHolder}  value={value}/>
        </div>

    )
}

export function PasswordInput({ label, inputType, placeHolder,name, value, handler}){
    return(

        <div className="relative w-full mb-3">
            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">{label}</label>
            <input name={name} type={inputType} onChange={handler} aria-label={label} className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder={placeHolder}  value={value}/>
        </div>

    )
}

export function TextInput({ label, placeHolder,name , value, handler}){

    return(

        <div className="relative w-full mb-3">
            <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">{label}</label>
            <textarea name={name} onChange={handler} aria-label={label} className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder={placeHolder} value={value} />
        </div>

    )
}

export function CheckBoxInput({label,name,handler, value}){
   
   return   (
   <div>
        <label className="inline-flex items-center cursor-pointer">
            <input name={name}  aria-label={label} value={value} onChange={handler ? handler : null}  type="checkbox" className="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
            <span className="ml-2 text-sm font-semibold text-gray-600">{label}</span>
        </label>
    </div>
    )
}