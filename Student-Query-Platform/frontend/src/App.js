import React, { useEffect } from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './Action/User'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Navbar from './Components/Nav/Navbar'
import Account from './Components/Account/Account'
import Allusers from './Components/AllUsers/Allusers'
import NewPost from './Components/NewPost/NewPost'
import Signup from './Components/Signup/Signup'
import UserProfile from './Components/UserProfile/UserProfile'


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
       dispatch(loadUser());
  }, [dispatch])
  
  const {isAuthenticated} = useSelector((state)=>state.user);
  return (
    <div>
      {
         isAuthenticated ? <Navbar/>:<Header/>
      }
     
      <Router>
        <Routes>
          <Route path='/' element={isAuthenticated?<Home/>:<About/>}/>
           <Route path='/login' element={isAuthenticated?<Home/>:<Login/>}/>
           <Route path='/users' element={isAuthenticated?<Allusers/>:<About/>}/>
           <Route path='/profile' element={isAuthenticated?<Account/>:<About/>}/>
           <Route path='/newquery' element={isAuthenticated?<NewPost/>:<About/>}/>
           <Route path='/register' element={isAuthenticated?<Home/>:<Signup/>}/> 
           <Route path='/user/:id' element={isAuthenticated?<UserProfile/>:<Login/>}/> 
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App