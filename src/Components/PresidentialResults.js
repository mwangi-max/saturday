import React from 'react';
import {Link} from 'react-router-dom';


const PresidentialResults = ()=>{
 return(
  <section>
   <article className='results'>
    <h2> IEBC Presidential Results Kiambu County</h2>
    <p>(IEBC - Independent Electoral & Boundaries Commission (Kenya))</p>
    <h3>William Ruto - <span className='green'>606,051 Votes,</span> <span className='blue'>Party:UDA</span></h3>
    <h3>Raila Odinga - <span className='green'>210,514 Votes,</span> <span className='blue'>Party:ODM</span></h3>
    <h3>George Wajackoyah - <span className='green'>4,376 Votes,</span> <span className='blue'>Party:Roots</span></h3>
    <h3>David Mwaure - <span className='green'>3,805 Votes,</span> <span className='blue'>Party:ODM</span></h3>
    <hr/>
    <h3>Registered Voters - <span className='blue'>1,275,168</span></h3>
    <h3>Total Valid Votes - <span className='green'>824,746</span></h3>
    <h3>Rejected Ballots - <span className='red'>5,633</span></h3>
    <Link to='/' className='link'>Go Back</Link>
   </article>
  </section>
 )
}
export default PresidentialResults;