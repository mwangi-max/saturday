import React from 'react';
import {NavLink,Outlet} from 'react-router-dom';


const SharedLayout = ()=>{
 return(
  <>
  <nav className='nav'>
     <NavLink to='/' className={({isActive})=>(isActive ? 'active' : 'link')}>Home</NavLink>
     <NavLink to ='governor' className={({isActive})=>(isActive ? 'active' : 'link')}>Gvn</NavLink>
     <NavLink to ='senator' className={({isActive})=>(isActive ? 'active' : 'link')}>Senr</NavLink>
     <NavLink to ='women-rep' className={({isActive})=>(isActive ? 'active' : 'link')}>W.Rep</NavLink>
     <NavLink to ='mps' className={({isActive})=>(isActive ? 'active' : 'link')}>MPs</NavLink>
     <NavLink to ='mcas' className={({isActive})=>(isActive ? 'active' : 'link')}>MCAs</NavLink>

  </nav>
  <Outlet/>
  <footer>
   <h5>All Rights Reserved &copy;2022 <a href='https://levkinblogs.com/'>Levkin Blogs</a></h5>
  </footer>
  </>
 )
}

export default SharedLayout;
