import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

//Pages
import Home from './pages/home'
import About from './pages/about'
import Contacts from './pages/contacts'
import Footer from './pages/footer';


function App() {
 return (
<>
   <Router>
<div id="body">

      {/* Header or Navbar */}
       <div id='navbar' className='p-5 flex flex-row justify-between items-center h-[4.375rem] px-20'>
        
        <div id="brandName">
          <h2 className='text-2xl font-bold text-accent-400'> lei <span className='text-primary-400'>ocopio</span> </h2>
        </div>

        <div id="nav">
          <center>
          <ul className='flex flex-row gap-10'>

           <li>
             <Link to="/" className='font-bold hover:bg-primary-300 p-3 rounded-lg active:bg-primary-400 focus:bg-primary-500'>Home</Link>
           </li>

           <li>
             <Link to="/about" className='font-bold hover:bg-primary-300 p-3 rounded-lg active:bg-primary-400 focus:bg-primary-500'>About</Link>
           </li>

           <li>
             <Link to="/contacts" className='font-bold hover:bg-primary-300 p-3 rounded-lg active:bg-primary-400 focus:bg-primary-500'>Contact</Link>
           </li>

         </ul>
         </center>

        </div>

        <div id="socials">
          
        </div>

       </div>


      {/* The main thing */}

      <main className='mx-[10vh] mt-[5rem]'>
        <Routes >

         <Route path='/' element={<Home/>} />

         <Route path='/about' element={<About/>} />

         <Route path='/contacts' element={<Contacts/>} />

       </Routes>

      </main>


       <div id="footer">
          <Footer></Footer>
       </div>
    

    </div>
   </Router>

</>
 );
}

export default App;
