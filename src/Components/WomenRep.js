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
      <div className='format'>
      <h3>Anne Wanjiku Muratha</h3>
      <h3>United Democratic Alliance (UDA)</h3>
      <Link to='/women-rep-results'>IEBC Results</Link>
      </div>
      
     </article>
    </section>
  )
}

export default WomenRep
