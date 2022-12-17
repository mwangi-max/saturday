import React from 'react';
import {Link} from 'react-router-dom';

const WomenRep = () => {
  return (
    <section className='container'>
     <article>
      <h1>Women Representative</h1>
      <figure>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUST_HBJ8tyIDmDFkiJD7uo3lC59vALQGqw&usqp=CAU' alt='Kiambu Women Rep 2022' className='images'/>
      </figure>
      <article className='info'>
      <h2>Anne Wanjiku Muratha</h2>
      <h4>United Democratic Alliance (UDA)</h4>
      <Link to='/women-rep-results'>IEBC Results</Link>
      </article>
      
     </article>
    </section>
  )
}

export default WomenRep
