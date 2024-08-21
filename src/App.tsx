import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import Edicao from './pages/Edicao';
import { ContainerGlobal, PaginaGlobal } from './styles';
import Adicionar from './pages/Adicionar';
import Remover from './pages/Remover';
import store from './store';


const App = () => {
  const rotas = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/edicao',
      element: <Edicao/>
    },
    {
      path: '/adicionar',
      element: <Adicionar/>
    },
    {
      path: '/remover',
      element:<Remover/>
    }
  ])
  return (
   <Provider store={store}>
     <PaginaGlobal/>
        <ContainerGlobal>
            <RouterProvider router={rotas} />
        </ContainerGlobal>
   </Provider>
  )
}

export default App;
