import React from 'react';
import {Link} from 'react-router-dom';


const WomenRepResults = ()=>{
 return(
  <section className='container'>
   <article className='results'>
    <h2> IEBC Kiambu County Women Representative Results 2022</h2>
    <p>(IEBC - Independent Electoral & Boundaries Commission (Kenya))</p>
    <h3>Anne Muratha - <span className='green'>405,592 Votes,</span> <span className='blue'>Party:UDA</span></h3>
    <h3>Mercy Nungari - <span className='green'>212,115 Votes,</span> <span className='blue'>Party:Tujibebe</span></h3>
    <h3>Loise Kim - <span className='green'>88,086 Votes,</span> <span className='blue'>Party:Independent</span></h3>
    <h3>Gladys Chania - <span className='green'>45,441 Votes,</span> <span className='blue'>Party:Jubilee</span></h3>
    <h3>Lydia Njeri - <span className='green'>25,597 Votes,</span> <span className='blue'>Party:ODM</span></h3>
    <h3>Njeri Bakari - <span className='green'>15,673 Votes,</span> <span className='blue'>Party:CCK</span></h3>
    <h3>Mary Kirika - <span className='green'>14,644 Votes,</span> <span className='blue'>Party:Independent</span></h3>
    <h3>Lennah Koinange - <span className='green'>10,643 Votes,</span> <span className='blue'>Party:Independent</span></h3>
    <h3>Hellen Wagaki - <span className='green'>2,882 Votes,</span> <span className='blue'>Party:Independent</span></h3>
    <Link to='/women-rep' className='link'>Go Back</Link>
   </article>
  </section>
 )
}
export default WomenRepResults;