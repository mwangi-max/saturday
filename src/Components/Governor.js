import React from 'react';
import {Link} from 'react-router-dom';

const Governor = () => {
  return (
    <section className='container'>
     <article>
      <h1>Governor</h1>
      <figure>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJxdMAIGpRoOzrl8Y1eo_9jVCInMaXOgxUA&usqp=CAU' alt='Kiambu Governor 2022' className='images'/>
      </figure>
      <article className='info'>
       <h2>Paul Kimani Wamatangi</h2>
      <h4>United Democartic Alliance (UDA)</h4>
            
            <Link to='/gvn-results'>IEBC Results</Link>
     
      </article>
       
     </article>
    </section>
  )
}

export default Governor
