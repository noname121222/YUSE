
import {Home,About,Contact,Shop,Signup,Like,Electronics,Baby,Womens,Medicine,Mens,Groceries,Sports,Intoe,Finaly,Check,Health,Lifestyle,Into} from './Presentation'
import Layout from "./Layout";

import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element ={<Layout/>} >
        <Route index  element ={<Home/>}/>
        <Route path='/about'  element ={<About/>}/>
        <Route path='/contact'  element ={<Contact/>}/>
    
        <Route path='/shop'  element ={<Shop/>}/>
        <Route path='/signup'  element ={<Signup/>}/>
        <Route path='/like'  element ={<Like/>}/>
        <Route path='/lifestyle'  element ={<Lifestyle/>}/>
        <Route path='/baby'  element ={<Baby/>}/>
        <Route path='/womens'  element ={<Womens/>}/>
        <Route path='/medicine'  element ={<Medicine/>}/>
        <Route path='/elector'  element ={<Electronics/>}/>
        <Route path='/mens'  element ={<Mens/>}/>
        <Route path='/groce'  element ={<Groceries/>}/>
        <Route path='/sports'  element ={<Sports/>}/>
        <Route path='/health'  element ={<Health/>}/>
        <Route path='/into/:id'  element ={<Into/>}/>
        <Route path='/check'  element ={<Check/>}/>
        <Route path='/fn'  element ={<Finaly/>}/>
        <Route path='/intoe'  element ={<Intoe/>}/>

        
      </Route>
    )
  )
  
  return (
    <>
         <RouterProvider  router={router}/>
   
    </>
  )
}

export default App
