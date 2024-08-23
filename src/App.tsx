import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import PaginaGlobal, { ContainerGlobal } from './styles';
import Adicionar from './pages/Adicionar';
import store from './store';


const App = () => {
  const rotas = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path: '/adicionar',
      element: <Adicionar/>
    },
   
  ])
  return (
   <Provider store={store}>
          <PaginaGlobal/>
            <ContainerGlobal>
            <RouterProvider router={rotas}/>
        </ContainerGlobal>
   </Provider>
  )
}

export default App;
