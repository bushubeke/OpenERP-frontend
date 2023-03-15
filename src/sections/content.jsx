import { useStore } from '../store/store'
import { LogInPage } from '../Pages/login'
import { PrivateRoutes } from '../components/privateroute'
import { FormLayOutPage } from '../Pages/viewlayout'
import { AppSpinner } from '../Pages/spinner'
import { useStyle } from '../store/theme'
import { TestCont } from '../sections/testcont'
import { Routes, Route } from 'react-router-dom'
import { RolesPage } from '../Pages/roles'

function Home(){
    const compDivClass=useStyle((state)=>state.bushuComponentContainer)
   
    return(
        <div className={compDivClass}>
            <h1>
                This is Home Page       
            </h1>
       

        </div>
    )
}

export function MainContent(){
    const contDivClass=useStyle((state)=> state.styles.bushuContSec)
    return(
    <div className={contDivClass}>
        <Routes>
            <Route element={<PrivateRoutes /> }>  
                <Route path="/"     element={<Home />} />
                <Route path="/spin" element={<AppSpinner />} />  
                <Route path="/layout" element={<FormLayOutPage />} />  
                <Route path="/roles" element={<RolesPage />} />  
            </Route>
            <Route path="/login" element={<LogInPage/>} />   
        </Routes>
     </div>
    )
}