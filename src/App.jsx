import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
   const[bookmarks,setBookmarks]=useState([])

   const handleAddToBoormark = blog =>{
    console.log("Buttne clicked");
   }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBoormark={handleAddToBoormark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
     
    </>
  )
}

export default App
