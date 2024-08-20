import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Edicao from './pages/Edicao';
import { ContainerGlobal, PaginaGlobal } from './styles';


const App = () => {
  const rotas = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/edicao',
      element: <Edicao/>
    }
  ])
  return (
   <>
     <PaginaGlobal/>
        <ContainerGlobal>
            <Home/>
        </ContainerGlobal>
   </>
  )
}

export default App;
