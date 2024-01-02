import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import {privateRoutes, publicRoutes} from './constants/routesList'
import DefaultLayout from './components/Layouts/DefaultLayout';
import NoPage from './pages/NoPage';

const queryClient = new QueryClient()

function App() {

  return (
    <>
     <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
            {
              privateRoutes.map((route)=>{
                const Page = route.element;
                //Layout mặc định
                const Layout = route.layout ? route.layout : DefaultLayout;
                return (
                  <Route key={route.id} path={route.path} element={<Layout />}  >
                      <Route index element={<Page />} />
                  </Route>
                )
                
              })
            }
            {
            publicRoutes.map((route)=>{
                const Page = route.element;
                //Layout mặc định
                const Layout = route.layout ? route.layout : DefaultLayout;
                return (
                  <Route key={route.id} path={route.path} element={<Layout />}  >
                      <Route index element={<Page />} />
                  </Route>
                )
                
              })
            }
            {/* 404 Not Found */}
           <Route element={<DefaultLayout />}>
              <Route path='*' element={<NoPage />}  />
           </Route>
        </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}

export default App
