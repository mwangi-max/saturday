import React from 'react';
import {Link } from 'react-router-dom';

const Error = ()=>{
 return(
  <section className='container'>
   <article className='info'>
    <h2>Sorry, the page that you are looking for doesn't exist</h2>
    <p>Apologies for any misconvenience caused</p>
    <h3>Kindly navigate back <Link to='/'>Home</Link></h3>

   </article>
  </section>
 )
}
export default Error;