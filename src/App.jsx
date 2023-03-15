import './main.css'
import { useStyle } from './store/theme'
import { BrowserRouter } from 'react-router-dom'
import { MainContent } from './sections/content';
import { SideMenue } from './sections/sidebar';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient= new QueryClient()



function App(){
    const secClass=useStyle((state)=> state.styles.appSecClass)
    return(
        <BrowserRouter>    
            <QueryClientProvider client={queryClient}>
                <section className={secClass}>
                    <SideMenue />
                    <MainContent />       
                </section>
            {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />   */}
            </QueryClientProvider>
        </BrowserRouter> 
         )
    }


export default App



// npx tailwindcss -i ./src/index.css -m -o ./src/main.css 
// npx tailwindcss -i ./src/main.css -m -o ../static/css/main.min.css --watch