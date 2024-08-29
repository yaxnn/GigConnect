import React from 'react';
import MainLayout from './layouts/MainLayout';
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import FindTalent from './pages/FindTalent'
import FindWork from './pages/FindWork'



const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  <Route index element = {<HomePage />}/>
  <Route path='/findtalent' element = {<FindTalent />}/>
  <Route path='/findwork' element = {<FindWork />}/>
  </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
   
};

export default App;

